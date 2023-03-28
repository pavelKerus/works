import { top250Response } from "../../services";
import { MovieItem } from "../../types/MovieItem";
import { MoviesTop } from "../../types/Movies";
import { MoviesTopActionType } from "../../types/others";
import { AppDispatch } from "../store";

export const LOAD_TOP250 = "LOAD_TOP250";

export const loadTop250Action = (movies: MoviesTop): MoviesTopActionType => {
  return {
    type: LOAD_TOP250,
    payload: movies,
  };
};

export const asyncLoadTop250Action = (limit: number, page: number): any => {
  return (dispatch: AppDispatch): any => {
    top250Response(limit, page).then((movies: MoviesTop) =>
      dispatch(loadTop250Action(movies))
    );
  };
};
