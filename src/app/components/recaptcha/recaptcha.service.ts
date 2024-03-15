import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RecaptchaService {

  captchSource = new BehaviorSubject(null);
  captchStatus = this.captchSource.asObservable();
  constructor() { }

  setRecaptchaStatus(code: any) {
    this.captchSource.next(code);
  }

}
