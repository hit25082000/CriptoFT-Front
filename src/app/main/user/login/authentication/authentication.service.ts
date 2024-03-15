import { environment } from './../../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private readonly httpClient: HttpClient ) {}

  authenticate(usuario: string, senha: string) {
    return this.httpClient.post(`${environment.ApiUrl}/api/login`,{userName: usuario,password: senha,})
}}
