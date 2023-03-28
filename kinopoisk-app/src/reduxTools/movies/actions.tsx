import { moviesResponse } from "../../services";
import { MovieItem } from "../../types/MovieItem";
import { Movies } from "../../types/Movies";
import { MoviesActionType } from "../../types/others";
import { AppDispatch } from "../store";

export const LOAD_MOVIES = "LOAD_MOVIES";

export const loadMoviesAction = (movies: Movies): MoviesActionType => {
  return {
    type: LOAD_MOVIES,
    payload: movies,
  };
};

export const asyncLoadMoviesAction = (
  numberOfMovies: number,
  page: number = 1
): any => {
  return (dispatch: AppDispatch): any => {
    moviesResponse(numberOfMovies, page).then((movies: Movies) =>
      dispatch(loadMoviesAction(movies))
    );
  };
};
