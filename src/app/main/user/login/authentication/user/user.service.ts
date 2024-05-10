import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usuarioSubject = new BehaviorSubject<User>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.haveToken()) {
      this.decodifyJWT();
    }
  }

  private decodifyJWT() {
    const token = this.tokenService.returnToken();
    const usuario = jwtDecode(token) as User;
    this.usuarioSubject.next(usuario);
  }

  returnUser() {
    this.decodifyJWT()
    return this.usuarioSubject.asObservable();
  }

  saveToken(token: string) {
    this.tokenService.saveToken(token);
    this.decodifyJWT();
  }

  logout() {
    this.tokenService.deleteToken();
    this.usuarioSubject.next({});
  }

  isLoged() {
    return this.tokenService.haveToken();
  }
}
