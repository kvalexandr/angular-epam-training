import {Injectable} from '@angular/core';
import {User, UserLogin, UserStorageData} from "../models/User";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private storage: UserStorageData,
    private http: HttpClient
  ) {
  }

  getToken() {
    return this.storage.getByName('token');
  }

  login(userLogin: UserLogin): Observable<any> {
    return this.http.post('http://localhost:3004/auth/login', userLogin)
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
    const token = this.storage.getByName('token');
    return this.http.post<User>('http://localhost:3004/auth/userinfo', {token});
  }

  private setToken(response: any | null) {
    if (response) {
      this.storage.add('token', response.token);
    } else {
      this.storage.remove('token');
    }
  }
}
