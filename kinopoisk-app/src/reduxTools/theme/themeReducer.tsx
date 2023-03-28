import { ThemeAction, THEME_DARK, THEME_LIGHT } from "./actions";

interface ThemeState {
  themeState: string;
}

const defaultState: ThemeState = {
  themeState: localStorage.getItem("theme") || "light",
};

export const themeReducer = (
  state: ThemeState = defaultState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case THEME_DARK:
      return {
        ...state,
        themeState: "dark",
      };
    case THEME_LIGHT:
      return {
        ...state,
        themeState: "light",
      };
    default:
      return state;
  }
};
