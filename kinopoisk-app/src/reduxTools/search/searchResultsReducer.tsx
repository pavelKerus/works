import { Movies } from "../../types/Movies";
import { SEARCH_RESULTS, SearchResultsActionType } from "./actions";
import { MovieItem } from "../../types/MovieItem";

const defaultState: Movies = {
  docs: [] as MovieItem[],
  total: 0,
  limit: 0,
  page: 0,
  pages: 0,
};

export const searchResultsReducer = (
  state: Movies = defaultState,
  action: SearchResultsActionType
): Movies => {
  switch (action.type) {
    case SEARCH_RESULTS:
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
