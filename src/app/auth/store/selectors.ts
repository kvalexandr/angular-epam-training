import {AppStateInterface} from "../../models/appState.interface";
import {createSelector} from "@ngrx/store";
import {AuthStateInterface} from "../types/authStateInterface";

export const authFeatureSelector = (state: AppStateInterface) => state.auth;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.isSubmitting
);

export const isAuthSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.isAuth
);

export const getUserSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.currentUser
);
