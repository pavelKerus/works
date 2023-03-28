import { MovieItem } from "./MovieItem";
import { Movies, MoviesTop } from "./Movies";

export interface BasicActionType{
  type:string,
}

export interface MoviesActionType extends BasicActionType{
  payload: Movies,
}

export interface MoviesTopActionType extends BasicActionType{
  payload: MoviesTop,
}

export interface MovieItemActionType extends BasicActionType{
  payload: MovieItem,
}

export interface MovieItemState{
  movie: MovieItem,
}

export interface ObjectStringList {
  [key:string]:string[]
}

export interface UserType {
  id : number,
  email: string,
  username: string
}

export interface ActivateUserActionType extends BasicActionType {
  payload?:ObjectStringList
}

export  interface tokenDto{
  access:string,
  refresh:string
}

export interface AuthUserActionType extends BasicActionType{
  payload:tokenDto | ObjectStringList | UserType
}

export interface AuthStateType {
  tokens:tokenDto | null,
  errors : ObjectStringList | null
  user: null | UserType
}

export interface LoadRegisterActionType extends BasicActionType {
  payload: UserType | ObjectStringList;
}

export interface RegisterStateType {
  isRegistered: boolean;
  user?: UserType;
  errors?: ObjectStringList;
}

