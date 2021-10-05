import {Injectable} from '@angular/core';
import {StorageLocalService} from "./storage-local.service";
import {UserLogin, UserStorageData} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: UserStorageData) {
  }

  login(email: string, password: string) {
    const user: UserLogin = {
      email,
      password
    }
    this.storage.add('user', user);
    console.log('login');
    return true;
  }

  logout() {
    this.storage.remove('user');
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
    return this.storage.getByName('user');
  }
}
