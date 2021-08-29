import React, { memo } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";

const IMG_API = "https://image.tmdb.org/t/p/w500";


const MovieDetail = memo(() => {

  const { active } = useSelector(state => state.card);
  return (
    <Fragment>
      <div
        className="modal fade fullscreen-modal"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg ">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid d-flex">
                <img className="m-2" style={{ width: "210px", height:"315px" }} src={IMG_API + active.poster_path} alt="movie-poster" />
                <div className="m-2">
                  <h2>{active.title}</h2>
                  <p>{active.overview}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

export default MovieDetail;
