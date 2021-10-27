import { Injectable } from '@angular/core';
import {UserStorageData} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class StorageLocalService extends UserStorageData {

  add(name: string, data: any) {
    localStorage.setItem(name, JSON.stringify(data));
  }

  remove(name: string) {
    localStorage.removeItem(name);
  }

  getByName(name: string) {
    const storage: string = localStorage.getItem(name) || '';
    return JSON.parse(storage);
  }
}
