import { registerUser } from "../../services";
import { AppDispatch } from "../store";
import { ObjectStringList,UserType,LoadRegisterActionType } from "../../types/others";

export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILED = "REGISTRATION_FAILED";

export const loadRegisterAction = (user: UserType): LoadRegisterActionType => {
  return {
    type: REGISTRATION_SUCCESS,
    payload: user,
  };
};

export const errorRegistrationAction = (
  errors: ObjectStringList
): LoadRegisterActionType => {
  return {
    type: REGISTRATION_FAILED,
    payload: errors,
  };
};

export const asyncRegistrationUserAction = (
  userName: string,
  email: string,
  password: string,
  cb: () => void
): any => {
  return async (dispatch: AppDispatch) => {
    const result = await registerUser(userName, email, password);
    if (result.ok) {
      dispatch(loadRegisterAction(result.data));
      cb();
    } else {
      dispatch(errorRegistrationAction(result.data));
    }
  };
};


