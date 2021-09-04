import React, { useEffect, useState } from "react";
import MovieCard from "../cards/MovieCard";
import "../../style/styleSection.css";
import { memo } from "react";
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

const Section = memo(() => {
  const [movies, setMovies] = useState([]);
  const [initial, setInitial] = useState(true)
  const [pages, setPages] = useState(1)

  //   const [pages, setPages] = useState(1);
  const moviesResult = useSelector((store) => store.movies.results);
  const moviesName = useSelector((store) => store.movies.name);
  const moviesTitle = useSelector((store) => store.movies.title);

  const moviesFS = useSelector((store) => store.card.card)

  const dispatch = useDispatch();
  
  useEffect(() => {

    if (initial && moviesResult.length < 1) {
      dispatch(findMovies(pages));
      dispatch(ListarMovies())
      setInitial(false)
    } else {
      setMovies(moviesResult);
    }

    if(pages !== 1){
      
    }
    dispatch(ListarMovies())
    
  }, [moviesResult, initial, dispatch, pages]);

  const onScrollToEnd = () => {
    setPages(pages + 1)
    
  }

  window.onscroll = function (){
    if(window.innerHeight + document.documentElement.scrollTop 
      === document.documentElement.offsetHeight){
      onScrollToEnd()
      console.log(pages)
    }
  }

  const [deletes, handleDeleteMovie] = useDelete([]);
  return (
    <div >
      <h1 style={{ color: "white" }}>{moviesTitle}</h1>
      <div className="section-movies">

        {
          moviesFS?.filter(search(moviesName))?.map(data => (
            <MovieCard
                  deleteMovie={handleDeleteMovie}
                  key={data.id}
                  data={data}
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
                  deleteMovie={handleDeleteMovie}
                  key={data.id}
                  data={data}
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
});

export default Section;
