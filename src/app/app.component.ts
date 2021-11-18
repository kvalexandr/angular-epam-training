import {Component, OnInit} from '@angular/core';
import {getUserAction} from "./auth/store/actions/login.action";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(getUserAction());
  }
}
