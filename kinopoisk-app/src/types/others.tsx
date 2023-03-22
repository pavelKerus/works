import { MovieItem } from "./MovieItem";
import { Movies } from "./Movies";

export interface BasicActionType{
  type:string,
}

export interface MoviesActionType extends BasicActionType{
  payload: Movies,
}

export interface MovieItemActionType extends BasicActionType{
  payload: MovieItem,
}

export interface MovieItemState{
  movie: MovieItem,
}