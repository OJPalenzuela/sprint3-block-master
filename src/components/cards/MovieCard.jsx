import React from "react";
import { useDispatch } from "react-redux";
import { activeCard } from "../../actions/cardActions";

import "../../style/styleMovieCard.css";
import file from "../../assets/images/not-found.jpg"
import MovieDetail from "./MovieDetail";

const IMG_API = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ data, apiDelete }) => {
  const dispatch = useDispatch();

  const handleActive = (data) => {
    dispatch(activeCard(data.id, data));
  };

  const setImage = () => {
    if(data?.poster_path !== undefined && data?.poster_path !== null){
      return IMG_API + data.poster_path
    }else if(data?.file !== undefined && data?.file !== null){
      return data.file
    }else {
      return file
    }
  }

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
          setImage()
          } alt="" />
      </div>
      <MovieDetail
        isApi = {apiDelete}
      />
    </div>
  );
};

export default MovieCard;
