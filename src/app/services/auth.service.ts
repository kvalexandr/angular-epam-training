import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string) {
    const user = {
      email,
      password
    }
    localStorage.setItem('user', JSON.stringify(user));
    console.log('login');
    return true;
  }

  logout() {
    localStorage.setItem('user', '');
    console.log('logout');
  }

  isAuth() {
    const user = this.getUserInfo();
    if (user.email && user.password) {
      return true;
    }

    return false;
  }

  getUserInfo() {
    const storage: string = localStorage.getItem('user') || '{}';
    const user = JSON.parse(storage);
    return user;
  }
}
