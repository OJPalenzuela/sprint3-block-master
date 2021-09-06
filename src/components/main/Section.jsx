import React, { useEffect, useState } from "react";
import MovieCard from "../cards/MovieCard";
import "../../style/styleSection.css";

import { useSelector, useDispatch } from "react-redux";
import { findMovies } from "../../actions/moviesActions";
import { useDelete } from "../../hooks/useDelete";
import found from "../../assets/svg/not-found.svg"
import { ListarMovies } from "../../actions/cardActions";

const search = (term) => {
  return function (x) {
      return x.title.toLowerCase().includes(term) || !term;
  }
}

const Section = () => {
  const [movies, setMovies] = useState([]);
  const [initial, setInitial] = useState(true)
  const [pages, setPages] = useState(1)
  const [deletes, handleDeleteMovie] = useDelete([]);
  const moviesResult = useSelector((store) => store.movies.results);
  const moviesName = useSelector((store) => store.movies.name);
  const moviesTitle = useSelector((store) => store.movies.title);
  const moviesFS = useSelector((store) => store.card.card)

  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log("A")

    if (initial && moviesResult.length < 1) {
      dispatch(findMovies("release_date.desc", pages));
      dispatch(ListarMovies())
      setInitial(false)
    } else {
      setMovies(moviesResult);
      console.log("AAA")
    }

    if(pages !== 1){
      
    }
    dispatch(ListarMovies())
    
  }, [moviesResult, initial, dispatch, pages]);

  return (
    <div >
      
      <h1 style={{ color: "white" }}>{moviesTitle}</h1>
      <div className="section-movies">

        {
          moviesFS?.filter(search(moviesName))?.map(data => (
            <MovieCard
                  key={data.id}
                  data={data}
                  apiDelete={false}
              />
          ))
        }

        {

          (movies.length > 0) ?
          (
          movies?.map(
            (data, key) =>
              deletes.includes(data.id) ?
                (<div style={{ display: "none" }} key={key}></div>)
                :
                (<MovieCard
                  key={data.id}
                  data={data}
                  apiDelete={true}
                />)
          ))
          :
          (<div className="text-center text-white">
            <img src={found} alt="" />
            <h2>No se encontaron resultados para "{moviesName}"</h2>
          </div>)
        }
      </div>
    </div>
  );
};

export default Section;
