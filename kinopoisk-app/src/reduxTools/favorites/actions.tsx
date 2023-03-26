import { MovieItem } from "../../types/MovieItem"

export const ADD_FAVORITES = "ADD_FAVORITES"
export const DELETE_FAVORITES = "DELETE_FAVORITES"

export interface FavoritesAction{
  type: "ADD_FAVORITES" | "DELETE_FAVORITES"
  payload:MovieItem
}

export const addFavoritesAction = (movie:MovieItem):FavoritesAction => {
  return {
    type: ADD_FAVORITES,
    payload: movie
  }
}

export const deleteFavoritesAction = (movie:MovieItem):FavoritesAction => {
  return {
    type: DELETE_FAVORITES,
    payload: movie
  }
}