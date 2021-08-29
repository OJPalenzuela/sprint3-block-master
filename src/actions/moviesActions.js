import { types } from "../types/types";
import { search, getMovies } from "../helpers/apiConnect";

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
