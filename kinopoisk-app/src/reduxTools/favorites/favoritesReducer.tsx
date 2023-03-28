import { MovieItem } from "../../types/MovieItem";
import { ADD_FAVORITES, DELETE_FAVORITES, FavoritesAction } from "./actions";

export interface FavoritesState {
  favorites: MovieItem[];
}

const defaultState = {
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

export const favoritesReducer = (
  state: FavoritesState = defaultState,
  action: FavoritesAction
): FavoritesState => {
  switch (action.type) {
    case ADD_FAVORITES:
      const increaseArray: MovieItem[] = state.favorites.slice(0);
      increaseArray.push(action.payload);
      return {
        ...state,
        favorites: increaseArray,
      };

    case DELETE_FAVORITES:
      const indexOfElement = state.favorites.findIndex(
        (el) => el.id === action.payload.id
      );
      let decreaseArray: MovieItem[] = [] as MovieItem[];
      if (indexOfElement !== 0 && indexOfElement !== state.favorites.length) {
        decreaseArray = state.favorites
          .slice(0, indexOfElement)
          .concat(
            state.favorites.slice(indexOfElement + 1, state.favorites.length)
          );
      } else if (indexOfElement === 0) {
        decreaseArray = state.favorites.slice(1);
      } else if (indexOfElement === state.favorites.length - 1) {
        decreaseArray = state.favorites.slice(0, state.favorites.length - 1);
      }

      return {
        ...state,
        favorites: decreaseArray,
      };

    default:
      return state;
  }
};
