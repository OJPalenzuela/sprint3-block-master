import React from "react";
import "../../style/styleMovieCard.css";
import MovieDetail from "./MovieDetail";

const IMG_API = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ data, click, deleteMovie }) => {
  return (
    <div
      className="card-movie"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <div className="card-movie" onClick={() => click(data)}>
        <div className="rating">
          <i style={{ color: "#FED941" }} className="fas fa-star"></i>{" "}
          {data.vote_average}
        </div>
        <img className="img-card" src={IMG_API + data.poster_path} alt="" />
      </div>
      <MovieDetail data={data}/>
    </div>
  );
};

export default MovieCard;
