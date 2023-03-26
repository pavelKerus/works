import { BasicActionType, ObjectStringList, UserType,AuthUserActionType, tokenDto} from "../../types/others";
import { AppDispatch,AppState } from "../store"
import { getTokensUser } from "../../services/index"
import { fetchRefreshToken } from "../../services/index"
import { getUser } from "../../services/index"

export const GET_TOKENS_SUCCESS = "GET_TOKENS_SUCESS"
export const GET_TOKENS_FAILED = "GET_TOKENS_FAILED"
export const GET_USER = "GET_USER"
export const SIGN_OUT = "SIGN_OUT"

export const getTokensSuccessAction = (tokens:tokenDto): AuthUserActionType => {
  return {
    type : GET_TOKENS_SUCCESS,
    payload: tokens
  }
}

export const getTokensFailedAction = (errors:ObjectStringList): AuthUserActionType => {
  return{
    type:GET_TOKENS_FAILED,
    payload:errors
  }
}

export const getUserAction = (user: UserType) => {
  return {
      type: GET_USER,
      payload: user
  }
}

export const signOutAction = (): BasicActionType => {
  return {
      type: SIGN_OUT
  }
}

export const getTokensAsyncAction = (email:string, password:string): any => {
  return async (dispatch:AppDispatch) => {
    const result = await getTokensUser (email,password)

    if(result.ok){
      dispatch(getTokensSuccessAction(result.data))
      // cb()
    } else {
      dispatch (getTokensFailedAction(result.data))
    }
  }
}

export const refreshTokenAsyncAction = (): any => {
  return async (dispatch: AppDispatch, getState: () => AppState) => {
      const refreshToken = getState().auth.tokens?.refresh
      if (!refreshToken) {
          console.log('No refreshToken')
          throw new Error()
      }

      const result = await fetchRefreshToken(refreshToken)
      if (result.ok) {
          dispatch(getTokensSuccessAction({
              access: result.data.access,
              refresh: refreshToken
          }))
      }
  }
}

export const getUserAsyncAction = (email: string, password: string, cb: () => void): any => {
  return async (dispatch: AppDispatch, getState: () => AppState) => {
      await dispatch(getTokensAsyncAction(email, password))
      const userData = getState().auth.user?.username
      let accessToken = getState().auth.tokens?.access
      let refreshToken = getState().auth.tokens?.refresh

      if (!refreshToken) {
          await dispatch(getTokensAsyncAction(email, password))
          refreshToken = getState().auth.tokens?.refresh
          if (refreshToken) {
              await dispatch(getUserAsyncAction(email, password, cb))
          } else {
              return
          }
          return
      } else if (!accessToken) {
          await dispatch(refreshTokenAsyncAction())
          await dispatch(getUserAsyncAction(email, password, cb))
      } else if (userData === undefined) {
          const userInfo = await getUser(accessToken!)
          dispatch(getUserAction(userInfo.data))
          cb()
      }
  }
}

