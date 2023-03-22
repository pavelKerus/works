import { MoviesActionType } from "../../types/others";
import { LOAD_MOVIES } from "./actions";
import { Movies } from "../../types/Movies";
import { MovieItem } from "../../types/MovieItem";

const defaultState: Movies = {
  docs: [] as MovieItem[],
  total: 0,
  limit: 0,
  page: 0,
  pages: 0,
};

export const moviesReducer = (
  state: Movies = defaultState,
  action: MoviesActionType
): Movies => {
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        ...state,
        docs: action.payload.docs,
        total: action.payload.total,
        limit: action.payload.limit,
        page: action.payload.page,
        pages: action.payload.pages,
      };
    default:
      return state;
  }
};
