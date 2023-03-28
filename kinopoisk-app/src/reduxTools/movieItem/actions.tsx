import { moviesResponseById } from "../../services";
import { MovieItem } from "../../types/MovieItem";
import { MovieItemActionType } from "../../types/others";
import { AppDispatch } from "../store";

export const LOAD_MOVIEITEM = "LOAD_MOVIEITEM";

export const loadMovieItemAction = (movie: MovieItem): MovieItemActionType => {
  return {
    type: LOAD_MOVIEITEM,
    payload: movie,
  };
};

export const asyncLoadMovieItemAction = (id: string | undefined): any => {
  return (dispatch: AppDispatch) => {
    moviesResponseById(id).then((movie: MovieItem) =>
      dispatch(loadMovieItemAction(movie))
    );
  };
};
