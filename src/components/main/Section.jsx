import React, { useEffect, useState } from "react";
import MovieCard from "../cards/MovieCard";
import "../../style/styleSection.css";
import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { findMovies } from "../../actions/moviesActions";
const Section = memo(() => {
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(1);
  const moviesResult = useSelector((store) => store.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (moviesResult.length < 1) {
      dispatch(findMovies());
    } else {
      setMovies(moviesResult);
    }
    console.log(movies);
  }, [moviesResult, dispatch]);

  const change = () => {
    setPages(pages + 1);
    console.log(pages);
  };

  return (
    <div className="section-movies">
      <div onClick={() => change()}>A</div>
      {movies.map((data) => (
        <MovieCard key={data.id} {...data} />
      ))}
    </div>
  );
});

export default Section;
