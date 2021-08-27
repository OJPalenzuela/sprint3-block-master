import { types } from "../types/types";
import { search, getMovies } from "../helpers/apiConnect";

export const findMovies = () => {
  return (dispatch) => {
    getMovies.then((data) => {
      dispatch({
        type: types.movies,  
        payload: data
      });
    });
  };
};

export const searchMovies = (name) => {
  return (dispatch) => {
    search(name).then((data) => {
      dispatch({
        type: types.moviesSearch,  
        payload: data
      });
    });
  };
};
