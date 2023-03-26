import { ObjectStringList, UserType, LoadRegisterActionType, RegisterStateType} from "../../types/others";
import { REGISTRATION_SUCCESS, REGISTRATION_FAILED} from "./registrationActions";

const defaultState: RegisterStateType = {
  isRegistered: false,
};

export const registerReducer = (
  state: RegisterStateType = defaultState,
  action: LoadRegisterActionType
): RegisterStateType => {
  switch (action.type) {
    case REGISTRATION_SUCCESS:
      const loadUser = action.payload as UserType;
      return {
        ...state,
        isRegistered: true,
        user: loadUser,
        errors: undefined,
      };
    case REGISTRATION_FAILED:
      const errors = action.payload as ObjectStringList;
      return {
        ...state,
        isRegistered: false,
        user: undefined,
        errors: errors,
      };

    default:
      return state;
  }
};
