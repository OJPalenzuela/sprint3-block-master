import { types } from "../types/types";

const initialState = {};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.moviesSearch:
      return action.payload;
    case types.movies:
      return action.payload;
    default:
      return state;
  }
};
