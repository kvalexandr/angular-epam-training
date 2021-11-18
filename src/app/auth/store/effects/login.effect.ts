import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {
  getUserAction,
  getUserFailureAction,
  getUserSuccessAction,
  loginAction,
  loginActionSuccess
} from "../actions/login.action";
import {map, switchMap, tap, catchError} from "rxjs/operators";
import {AuthService} from "../../../services/auth.service";
import {User, UserResponse} from "../../../models/User";
import {Router} from "@angular/router";
import {of} from 'rxjs';

@Injectable()
export class LoginEffect {
  login$ = createEffect(() => this.action$.pipe(
    ofType(loginAction),
    switchMap(({request}) => {
      return this.authService.login(request)
        .pipe(
          map((response: UserResponse) => {
            return loginActionSuccess({response});
          })
        );
    })
  ));

  afterLogin$ = createEffect(() => this.action$.pipe(
      ofType(loginActionSuccess),
      tap(() => {
        this.router.navigateByUrl('/')
      }),
      switchMap(() => {
        return this.authService.getUserInfo().pipe(
          map((user: User) => {
            return getUserSuccessAction({user})
          })
        )
      })
    )
  );

  getUserInfo$ = createEffect(() => this.action$.pipe(
      ofType(getUserAction),
      switchMap(() => {
        return this.authService.getUserInfo().pipe(
          map((user: User) => {
            return getUserSuccessAction({user})
          }),

          catchError(() => {
            return of(getUserFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private action$: Actions,
    private authService: AuthService,
    private router: Router
  ) {
  }
}
