import { environment } from '../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from './new-user';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  constructor(private http: HttpClient) {}

  SigninNewUser(novoUsuario: NewUser) {
    return this.http.post(environment.ApiUrl +'/api/register', novoUsuario);
  }

  VerifyUserExists(nomeUsuario: string) {
    return this.http.get(environment.ApiUrl + `/api/user/${nomeUsuario}`);
  }
}
