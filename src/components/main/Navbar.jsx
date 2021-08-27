import React, {useState} from "react";
import "../../style/styleNavbar.css";
import image from "../../assets/svg/logo-blockBuster.svg";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/authActions";
import SearchBar from "../search/SearchBar";
import {searchMovies, findMovies} from "../../actions/moviesActions"

const Navbar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length < 1) {
        dispatch(findMovies())
    } else {
        dispatch(searchMovies(e.target.value))
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
              <a className="link" href="#welcome-section">
                Todas
              </a>
            </li>
            <li>
              <a className="link" href="#projects">
                Más valoradas
              </a>
            </li>
            <li>
              <a className="link" href="#section-contact">
                Menos valoradas
              </a>
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
