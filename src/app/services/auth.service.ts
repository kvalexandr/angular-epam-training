import {Injectable} from '@angular/core';
import {User, UserLogin, UserResponse, UserStorageData} from "../models/User";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthorization: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isAuth());

  constructor(
    private storage: UserStorageData,
    private http: HttpClient
  ) {
  }

  getToken() {
    const token = this.storage.getByName('token');
    return token.id || '';
  }

  login(userLogin: UserLogin): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${environment.apiUrl}/auth/login`, userLogin)
      .pipe(
        tap(this.setToken.bind(this))
      );
  }

  logout() {
    this.setToken(null);

  }

  isAuth() {
    const token = this.getToken();
    return !!token;
  }

  isAdmin() {
    return true;
  }

  getUserInfo(): Observable<User> {
    const token = this.getToken();
    return this.http.post<User>(`${environment.apiUrl}/auth/userinfo`, {token});
  }

  private setToken(response: any | null) {
    if (response) {
      this.storage.add('token', {id: response.token});
      this.isAuthorization.next(true);
    } else {
      this.storage.remove('token');
      this.isAuthorization.next(false);
    }
  }
}
