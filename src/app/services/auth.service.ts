import {Injectable, Injector} from '@angular/core';
import {StorageLocalService} from "./storage-local.service";
import {environment} from "../../environments/environment";
import {StorageSessionService} from "./storage-session.service";
import {UserLogin, UserStorageData} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  storageService = environment.storageService;
  storage: UserStorageData;

  constructor(injector: Injector) {
    switch (this.storageService) {
      case 'local':
        this.storage = injector.get(StorageLocalService);
        break;
      case 'session':
        this.storage = injector.get(StorageSessionService);
        break;
      default:
        throw new Error('Not service storage');
    }
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
