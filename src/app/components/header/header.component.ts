import {AuthService} from './../../services/auth.service';
import {Component, OnInit} from '@angular/core';
import {faUser, faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {User} from "../../models/User";
import {logoutAction} from "../../auth/store/actions/login.action";
import {AppStateInterface} from "../../models/appState.interface";
import {getUserSelector, isAuthSelector} from "../../auth/store/selectors";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public faUser = faUser;
  public faSign = faSignInAlt;

  isAuth$!: Observable<boolean | null>;
  currentUser$!: Observable<User | null>;

  constructor(private store: Store<AppStateInterface>) {
  }

  ngOnInit(): void {
    this.isAuth$ = this.store.pipe(select(isAuthSelector));
    this.currentUser$ = this.store.pipe(select(getUserSelector));
  }

  public logoutUser() {
    this.store.dispatch(logoutAction());
  }

}
