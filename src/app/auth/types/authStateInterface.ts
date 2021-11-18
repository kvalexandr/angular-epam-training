import {User} from "../../models/User";

export interface AuthStateInterface {
  isSubmitting: boolean,
  isAuth: boolean | null,
  currentUser: User | null,
  errors: string | null
}
