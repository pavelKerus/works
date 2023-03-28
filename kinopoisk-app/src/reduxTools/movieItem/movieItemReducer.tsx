import { MovieItemActionType, MovieItemState } from "../../types/others";
import { LOAD_MOVIEITEM } from "./actions";
import { MovieItem } from "../../types/MovieItem";

const defaultState: MovieItemState = {
  movie: {} as MovieItem,
};

export const movieItemReducer = (
  state: MovieItemState = defaultState,
  action: MovieItemActionType
): MovieItemState => {
  switch (action.type) {
    case LOAD_MOVIEITEM:
      return {
        ...state,
        movie: action.payload,
      };
    default:
      return state;
  }
};
