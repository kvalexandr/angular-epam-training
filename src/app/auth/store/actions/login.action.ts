import {createAction, props} from "@ngrx/store";
import {ActionTypes} from "../actionTypes";
import {User, UserLogin, UserResponse} from "../../../models/User";

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{request: UserLogin}>()
);

export const loginActionSuccess = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{response: UserResponse}>()
);

export const loginActionFailure = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{error: string}>()
);

export const getUserAction = createAction(
  ActionTypes.USER
);

export const getUserSuccessAction = createAction(
  ActionTypes.USER_SUCCESS,
  props<{user: User}>()
);

export const getUserFailureAction = createAction(
  ActionTypes.USER_FAILURE
);

export const logoutAction = createAction(
  ActionTypes.LOGOUT
);
