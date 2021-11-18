import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {logoutAction} from "../actions/login.action";
import {tap} from "rxjs/operators";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Injectable()
export class LogoutEffect {
  logout$ = createEffect(() => this.action$.pipe(
      ofType(logoutAction),
      tap(() => {
        this.authService.logout();
        this.router.navigateByUrl('/login');
      })
    ),
    {dispatch: false}
  );

  constructor(
    private action$: Actions,
    private authService: AuthService,
    private router: Router
  ) {
  }
}
