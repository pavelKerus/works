import { combineReducers } from "redux";
import { movieItemReducer } from "./movieItem/movieItemReducer";
import { moviesReducer } from "./movies/moviesReducer";
import { themeReducer } from "./theme/themeReducer";
import { burgerMenuReducer } from "./burgerMenu/burgerMenuReducer";
import { filterReducer } from "./filter/filterReducer";
import { authReducer } from "./auth/authReducer";
import { registerReducer } from "./registration/registrationReducer";
import { favoritesReducer } from "./favorites/favoritesReducer";
import { searchResultsReducer } from "./search/searchResultsReducer";
import { searchParamsReducer } from "./search/searchParamsReducer";
import { top250Reducer } from "./top250/top250Reducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  movies: moviesReducer,
  movieItem: movieItemReducer,
  burgerMenu: burgerMenuReducer,
  filter: filterReducer,
  auth: authReducer,
  register: registerReducer,
  favorites: favoritesReducer,
  searchParams: searchParamsReducer,
  searchResults: searchResultsReducer,
  top250: top250Reducer,
});
