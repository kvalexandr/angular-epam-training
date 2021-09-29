import { Injectable } from '@angular/core';
import {UserStorageData} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class StorageSessionService extends UserStorageData {

  add(name: string, data: any) {
    sessionStorage.setItem(name, JSON.stringify(data));
  }

  remove(name: string) {
    sessionStorage.removeItem(name);
  }

  getByName(name: string) {
    const storage: string = sessionStorage.getItem(name) || '{}';
    return JSON.parse(storage);
  }
}
