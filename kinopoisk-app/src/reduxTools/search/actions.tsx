import { Movies } from "../../types/Movies";
import { searchMoviesResponse } from "../../services";
import { AppDispatch } from "../store";

export const CHANGE_PARAMS = "CHANGE_PARAMS";
export const CHANGE_SEARCH_VALUE = "CHANGE_SEARCH_VALUE";
export const CLEAR_PARAMS = "CLEAR_PARAMS";

export const SEARCH_RESULTS = "SEARCH_RESULTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

// export interface SearchResultsState{
//   searchResults: Movies,
// }

export interface SearchParamsState {
  value?: string;
  genre?: string[];
  sortBy?: "rating.kp" | "year";
  yearsFrom?: string;
  yearsTo?: string;
  ratingFrom?: string;
  ratingTo?: string;
  countries?: string[];
}

export interface SearchParamsActionType {
  type: "CHANGE_PARAMS" | "CHANGE_SEARCH_VALUE" | "CLEAR_PARAMS";
  payload: SearchParamsState;
}

export interface ClearParamsActionType {
  type: "CLEAR_PARAMS";
}

export interface SearchResultsActionType {
  type: "SEARCH_RESULTS";
  payload: Movies;
}

export interface ClearSearchResultsActionType {
  type: "CLEAR_SEARCH_RESULTS";
}

export const changeSearchValueAction = (
  searchValue: string
): SearchParamsActionType => {
  return {
    type: CHANGE_SEARCH_VALUE,
    payload: {
      value: searchValue,
    },
  };
};

export const changeParamsAction = (
  params: SearchParamsState
): SearchParamsActionType => {
  console.log("show1");
  return {
    type: CHANGE_PARAMS,
    payload: params,
  };
};

export const clearParamsAction = (): ClearParamsActionType => {
  return {
    type: CLEAR_PARAMS,
  };
};

export const clearSearchResultsAction = (): ClearSearchResultsActionType => {
  return {
    type: CLEAR_SEARCH_RESULTS,
  };
};

export const searchResultsAction = (
  movies: Movies
): SearchResultsActionType => {
  return {
    type: SEARCH_RESULTS,
    payload: movies,
  };
};

export const asyncLoadSearchMoviesAction = (
  params: SearchParamsState,
  page: number,
  limit: number
): any => {
  return (dispatch: AppDispatch): any => {
    searchMoviesResponse(params, page, limit).then((movies: Movies) =>
      dispatch(searchResultsAction(movies))
    );
  };
};
