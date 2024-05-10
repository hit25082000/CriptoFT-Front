import { Inject, Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {

  returnToken() {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(KEY) ?? '';
    } else {
      return ''
    }
  }

  saveToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  deleteToken() {
    localStorage.removeItem(KEY);
  }

  haveToken() {
    return !!this.returnToken();
  }
}
