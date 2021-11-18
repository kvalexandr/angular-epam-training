import {Action, createReducer, on} from "@ngrx/store";
import {
  getUserFailureAction,
  getUserSuccessAction,
  loginAction,
  loginActionSuccess, logoutAction
} from "./actions/login.action";
import {AuthStateInterface} from "../types/authStateInterface";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isAuth: false,
  errors: null,
  currentUser: null
}

const loginReducer = createReducer(
  initialState,
  on(loginAction, (state) => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(loginActionSuccess, (state) => ({
      ...state,
      isSubmitting: true,
      isAuth: true
    })
  ),
  on(getUserSuccessAction, (state, action) => ({
      ...state,
      isAuth: true,
      currentUser: action.user
    })
  ),
  on(getUserFailureAction, (state) => ({
      ...state,
      isAuth: false,
      currentUser: null
    })
  ),
  on(logoutAction, (state) => ({
      ...state,
      isAuth: false,
      currentUser: null
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return loginReducer(state, action);
}
