import React, { memo } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";

const IMG_API = "https://image.tmdb.org/t/p/w500";


const MovieDetail = memo(() => {

    const {active} = useSelector(state => state.card);

  return (
    <Fragment>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
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
                <div className="container-fluid">
                <img style={{width:"210px"}} src={IMG_API + active.poster_path} alt="movie-poster" />
                <p>{active.overview}</p>
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
