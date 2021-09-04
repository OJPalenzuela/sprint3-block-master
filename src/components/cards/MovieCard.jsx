import React from "react";
import { useDispatch } from "react-redux";
import { activeCard } from "../../actions/cardActions";

import "../../style/styleMovieCard.css";
import MovieDetail from "./MovieDetail";

const IMG_API = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ data, click, deleteMovie }) => {
  const dispatch = useDispatch();

  const handleActive = (data) => {
    dispatch(activeCard(data.id, data));
  };

  return (
    <div
      className="card-movie"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <div className="card-movie" onClick={() => handleActive(data)}>
        <div className="rating">
          <i style={{ color: "#FED941" }} className="fas fa-star"></i>{" "}
          {data.vote_average}
        </div>
        <img className="img-card" src={
          data?.poster_path ?
            IMG_API + data.poster_path :
            data.file
          } alt="" />
      </div>
      <MovieDetail
        delete={deleteMovie}
      />
    </div>
  );
};

export default MovieCard;
