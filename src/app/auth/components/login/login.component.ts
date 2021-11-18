import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {loginAction} from "../../store/actions/login.action";
import {Observable} from "rxjs";
import {isSubmittingSelector} from "../../store/selectors";
import {AppStateInterface} from "../../../models/appState.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  isSubmitting$!: Observable<boolean>

  constructor(private authService: AuthService, private router: Router, private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })

    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  public loginUser() {
    // this.authService.login(this.form.value).subscribe(() => {
    //   this.router.navigate(['/courses']);
    // });
    this.store.dispatch(loginAction({request: this.form.value}));
  }
}
