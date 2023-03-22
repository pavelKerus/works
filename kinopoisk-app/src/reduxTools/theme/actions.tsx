export const THEME_DARK = "THEME_DARK"
export const THEME_LIGHT = "THEME_LIGHT"

export interface ThemeAction{
  type: "THEME_DARK" | "THEME_LIGHT"
}

export const themeDarkAction = ():ThemeAction => {
  return {
    type: THEME_DARK
  }
}

export const themeLightAction = ():ThemeAction => {
  return {
    type: THEME_LIGHT
  }
}