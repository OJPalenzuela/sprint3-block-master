import React, {useState} from "react";
import "../../style/styleNavbar.css";
import image from "../../assets/svg/logo-blockBuster.svg";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/authActions";
import SearchBar from "../search/SearchBar";
import {searchMovies, findMovies} from "../../actions/moviesActions"
import { Link } from "react-router-dom";



const Navbar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length < 1) {
        dispatch(findMovies(1))
    } else {
        dispatch(searchMovies(e.target.value, e.target.value))
    }
  };

  return (
    <header id="navbar">
      <nav id="nav">
        <div className="navbar-enlace">
          <button className="toggle">
            <i className="fas fa-bars"></i>
          </button>
          <img src={image} alt="logo" />
          <ul id="nav-ul">
            <li>
              <Link to="/">Todas</Link>
            </li>
            <li>
              <Link to="/most_valued">Más valoradas</Link>
            </li>
            <li>
              <Link to="/least_valued">Menos valoradas</Link>
            </li>
          </ul>
        </div>
        <SearchBar
          filter={searchMovies}
          handleChange={handleSearch}
          searchTerm={searchTerm}
        />
        <div className="d-flex align-items-center">
          <p id="enlace-descargar">{name}</p>
          <div
            onClick={() => {
              dispatch(startLogout());
            }}
            id="sign-out"
          >
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
