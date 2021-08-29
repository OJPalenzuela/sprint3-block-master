import React, { useEffect, useState } from "react";
import MovieCard from "../cards/MovieCard";
import "../../style/styleSection.css";
import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { findMovies } from "../../actions/moviesActions";

import { useDelete } from "../../hooks/useDelete";

import found from "../../assets/svg/not-found.svg"

const Section = memo(() => {
  const [movies, setMovies] = useState([]);
  const [initial, setInitial] = useState(true)

  //   const [pages, setPages] = useState(1);
  const moviesResult = useSelector((store) => store.movies.results);
  const moviesName = useSelector((store) => store.movies.name);
  const moviesTitle = useSelector((store) => store.movies.title);

  const dispatch = useDispatch();
  
  useEffect(() => {

    if (initial && moviesResult.length < 1) {
      dispatch(findMovies());
      setInitial(false)
    } else {
      setMovies(moviesResult);
      
    }
  }, [moviesResult, initial, dispatch]);

  //   const change = () => {
  //     setPages(pages + 1);
  //     console.log(pages);
  //   };


  //   const { active } = useSelector((state) => state.card);

  const [deletes, handleDeleteMovie] = useDelete([]);
  return (
    <div>
      <h1 style={{ color: "white" }}>{moviesTitle}</h1>
      <div className="section-movies">



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
