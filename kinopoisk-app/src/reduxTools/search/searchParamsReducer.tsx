import {
  CHANGE_PARAMS,
  CHANGE_SEARCH_VALUE,
  CLEAR_PARAMS,
  SearchParamsActionType,
} from "./actions";
import { SearchParamsState, ClearParamsActionType } from "./actions";

export const defaultStateSearchParams: SearchParamsState = {
  value: "",
  sortBy: "rating.kp",
  yearsFrom: "",
  yearsTo: "",
  ratingFrom: "",
  ratingTo: "",
  countries: [] as string[],
};

export const searchParamsReducer = (
  state: SearchParamsState = defaultStateSearchParams,
  action: SearchParamsActionType | ClearParamsActionType
): SearchParamsState => {
  switch (action.type) {
    case CHANGE_PARAMS:
      return {
        ...state,
        value: "",
        genre: action.payload.genre,
        sortBy: action.payload.sortBy,
        yearsFrom: action.payload.yearsFrom,
        yearsTo: action.payload.yearsTo,
        ratingFrom: action.payload.ratingFrom,
        ratingTo: action.payload.ratingTo,
        countries: action.payload.countries,
      };
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        value: action.payload.value,
      };
    case CLEAR_PARAMS:
      return {
        ...state,
        sortBy: "rating.kp",
        yearsFrom: "",
        yearsTo: "",
        ratingFrom: "",
        ratingTo: "",
        countries: [] as string[],
      };
    default:
      return state;
  }
};
