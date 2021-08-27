import React, { Fragment, memo } from "react";
import "../../style/styleMovieCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MovieDetail from "./MovieDetail";

const IMG_API = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ title, poster_path, vote_average }) => {

    // console.log(poster_path);
  return (
    <Fragment>
      

        <div className="rating">
          <i style={{ color: "#FED941" }} className="fas fa-star"></i>{" "}
          {vote_average}
        </div>
        <img className="img-card" src={IMG_API + poster_path} alt="" />
      
    </Fragment>
  );
};

export default MovieCard;
