import { Movies } from "../../types/Movies";
import { SEARCH_RESULTS, SearchResultsActionType, CLEAR_SEARCH_RESULTS, ClearSearchResultsActionType } from "./actions";
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
  action: SearchResultsActionType | ClearSearchResultsActionType
): Movies => {
  switch (action.type) {
    case SEARCH_RESULTS:
      return {
        ...state,
        docs: [...state.docs,...action.payload.docs],
        total: action.payload.total,
        limit: action.payload.limit,
        page: action.payload.page,
        pages: action.payload.pages,
      };
    
    case CLEAR_SEARCH_RESULTS:
      return{
        ...state,
        docs: [] as MovieItem[],
        total: 0,
        limit: 0,
        page: 0,
        pages: 0,
      }
    default:
      return state;
  }
};
