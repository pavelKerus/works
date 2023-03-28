export const CHANGE_MENU_STATE = "CHANGE_MENU_STATE";
export const CLOSE_MENU = "CLOSE_MENU";

export interface MenuAction {
  type: "CHANGE_MENU_STATE" | "CLOSE_MENU";
}

export const changeMenuStateAction = (): MenuAction => {
  return {
    type: CHANGE_MENU_STATE,
  };
};

export const closeMenuStateAction = (): MenuAction => {
  return {
    type: CLOSE_MENU,
  };
};
