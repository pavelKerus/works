import { combineReducers } from "redux";
import { movieItemReducer } from "./movieItem/movieItemReducer";
import { moviesReducer } from "./movies/moviesReducer";
import { themeReducer } from "./theme/themeReducer";
import { burgerMenuReducer } from "./burgerMenu/burgerMenuReducer";
import { filterReducer } from "./filter/filterReducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  movies:moviesReducer,
  movieItem:movieItemReducer,
  burgerMenu:burgerMenuReducer,
  filter:filterReducer,
});