import React from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Delete } from "../../actions/cardActions";
import { findTrailer } from "../../actions/moviesActions";

import "../../style/styleMovieCard.css";
const IMG_API = "https://image.tmdb.org/t/p/w500";


const MovieDetail = ({isApi}) => {

  const dispatch = useDispatch();
  const { active } = useSelector(state => state.card);
  

  const handleDeleteMovie = id => {
    console.log(isApi)
    if(isApi){
      
    }else{
      dispatch(Delete(id))
    }
  }


  return (
    <Fragment>
      <div
        className="modal fade fullscreen-modal"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen modal-dialog-centered "
        >
          <div className="modal-content modal-background p-5">
            <div className="modal-header modal-border">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body modal-border">
              <div className="container-fluid d-flex">
                <img className="m-2" style={{ width: "210px", height: "315px" }} src={active?.poster_path ?
            IMG_API + active.poster_path :
            active.file
          } alt="movie-poster" />
                <div className="m-2">
                  <h2>{active?.title}</h2>
                  <p>{active?.overview}</p>
                  <div className="modal-footer modal-border">
                    <div className="div-crud">
                      <button
                        type="button"
                        className="btn btn-delete"
                        onClick={() => handleDeleteMovie(active.id)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      <Link
                      to="/edit"
                        type="button"
                        className="btn btn-edit">
                        <i className="fas fa-edit"></i>
                      </Link>
                    </div>
                    <div className="div-views">
                      <button
                        type="button"
                        className="btn btn-now"
                        data-bs-dismiss="modal"
                      >
                        <i className="fas fa-play"></i>
                        <p>VER AHORA</p>
                      </button>
                      <button
                        onClick={() =>{
                          dispatch(findTrailer(active?.title))
                          console.log("Trailer")
                        }}
                      type="button" className="btn btn-after">
                        <i className="fas fa-plus"></i>
                        <p>VER TRAILER</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MovieDetail;
