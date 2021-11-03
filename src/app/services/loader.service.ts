import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setLoad(show: boolean) {
    this.loading.next(show);
  }
}
