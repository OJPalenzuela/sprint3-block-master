import { types } from "../types/types";

const initialState = {
  results: []
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.moviesSearch:
      return {
        results: action.payload.results
      };
    case types.movies:
      return {
        results: action.payload.results
      };
    default:
      return state;
  }
};
