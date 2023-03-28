import { MenuAction, CHANGE_MENU_STATE, CLOSE_MENU } from "./actions";

interface MenuState {
  isOpen: boolean;
}

const defaultState: MenuState = {
  isOpen: false,
};

export const burgerMenuReducer = (
  state: MenuState = defaultState,
  action: MenuAction
): MenuState => {
  switch (action.type) {
    case CHANGE_MENU_STATE:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case CLOSE_MENU:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};
