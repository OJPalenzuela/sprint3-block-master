import { types } from "../types/types";
import { search, getMovies, getUrlTrailer } from "../helpers/apiConnect";

export const findMovies = () => {
  return (dispatch) => {
    getMovies().then((data) => {
      dispatch({
        type: types.movies,  
        payload: {
          results: data
        }
      });
    });
  };
};

export const searchMovies = (searchName, name) => {
  return (dispatch) => {
    search(searchName, name).then((data) => {
      dispatch({
        type: types.moviesSearch,  
        payload: {
          name: searchName,
          results: data
        }
      });
    });
  };
};

export const findTrailer = (name) => {
  return (dispatch) => {
    getUrlTrailer(name).then((data) => {
      dispatch({
        type: types.movieCardTrailer,  
        payload: {
          videoUrl: data
        }
      });
    });
  };
};