import { ObjectStringList, UserType, AuthStateType,AuthUserActionType,tokenDto } from "../../types/others";
import { GET_TOKENS_FAILED, GET_TOKENS_SUCCESS,GET_USER,SIGN_OUT} from "./actions";

const defaultState: AuthStateType = {
  tokens:null,
  errors:null,
  user:null,
}

export const authReducer = (state:AuthStateType = defaultState,action:AuthUserActionType):AuthStateType => {
  switch (action.type) {
    case GET_TOKENS_SUCCESS: {
        return {
          ...state,
          tokens: action.payload as tokenDto,
          errors: null,
        };
    }
    case GET_TOKENS_FAILED: {
        return {
          ...state,
          tokens: null,
          errors: action.payload as ObjectStringList,
        };
    }
    case GET_USER: {
      return {
        ...state,
        user: action.payload as UserType,
      }
    }
    case SIGN_OUT: {
      return {
        ...state,
        tokens: null,
        errors: null,
        user: null
      }
    }
    default:
      return state;
}
}