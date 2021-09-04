import { types } from "../types/types";

const initialState = {
  title: "",
  name: "",
  results: [],
  deletes: []
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.moviesSearch:
      return {
        ...state,
        title: "Resultados de búsqueda",
        name: action.payload.name,
        results: action.payload.results,
        
      };
    case types.movies:
      return {
        ...state,
        title: "Todas las peliculas",
        name: '',
        results: action.payload.results
      };
    case types.moviesScroll:
        return {
          ...state,
          title: "Todas las peliculas",
          name: '',
          results: [...state.results, ...action.payload.results]
        };
    default:
      return state;
  }
};
