import { types } from "../types/types";

const initialState = {
  title: "",
  name: "",
  results: []
  
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.moviesSearch:
      return {
        title: "Resultados de búsqueda",
        name: action.payload.name,
        results: action.payload.results
      };
    case types.movies:
      return {
        ...state,
        title: "Todas las peliculas",

        results: action.payload.results
      };
    
    default:
      return state;
  }
};
