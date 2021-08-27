import React, { useEffect, useState } from "react";
import MovieCard from "../cards/MovieCard";
import "../../style/styleSection.css";
import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { findMovies } from "../../actions/moviesActions";

import { activeCard } from "../../actions/cardActions";
import { useDelete } from "../../hooks/useDelete";

const Section = memo(() => {
  const [movies, setMovies] = useState([]);
//   const [pages, setPages] = useState(1);
  const moviesResult = useSelector((store) => store.movies.results);
  const dispatch = useDispatch();

  useEffect(() => {
    if (moviesResult.length < 1) {
      dispatch(findMovies());
    } else {
      setMovies(moviesResult);
    }
  }, [moviesResult, dispatch]);

//   const change = () => {
//     setPages(pages + 1);
//     console.log(pages);
//   };
  const handleActive = (data) => {
    dispatch(activeCard(data.id, data));
  };

//   const { active } = useSelector((state) => state.card);

  const [deletes, handleDeleteMovie ] = useDelete([]);
  return (
    <div>
      <div style={{ color: "white" }}>Todas las Peliculas</div>
      <div className="section-movies">
        {movies?.map((data, key) =>
          deletes.includes(data.id) ? (
            <div style={{ display: "none" }} key={key}></div>
          ) : (
            <MovieCard
              deleteMovie={handleDeleteMovie}
              key={data.id}
              data={data}
              click={handleActive}
            />
          )
        )}
      </div>
    </div>
  );
});

export default Section;
