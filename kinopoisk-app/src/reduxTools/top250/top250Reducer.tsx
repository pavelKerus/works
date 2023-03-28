import { MoviesTopActionType } from "../../types/others";
import { LOAD_TOP250 } from "./actions";
import { MoviesTop } from "../../types/Movies";
import { MovieItemTop } from "../../types/MovieItem";
import { MovieItem } from "../../pages/MovieItem";

const defaultState: MoviesTop = {
  docs: [] as MovieItemTop[],
  total: 0,
  limit: 0,
  page: 0,
  pages: 0,
};

export const top250Reducer = (
  state: MoviesTop = defaultState,
  action: MoviesTopActionType
): MoviesTop => {
  switch (action.type) {
    case LOAD_TOP250:
      return {
        ...state,
        docs: [...state.docs,...action.payload.docs],
        total: action.payload.total,
        limit: action.payload.limit,
        page: action.payload.page,
        pages: action.payload.pages,
      };
    default:
      return state;
  }
};
