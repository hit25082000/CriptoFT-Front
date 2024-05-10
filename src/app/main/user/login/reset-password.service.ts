import { environment } from '../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResetPassword } from '../reset-password/user-reset-password';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  constructor(private http: HttpClient) {}

  ResetPasswordRequest(email: string) {
    return this.http.post(`${environment.ApiUrl}/reset-password-request`,{Email: email});
  }

  ResetPassword(userResetPassword: UserResetPassword) {
    return this.http.post(`${environment.ApiUrl}/reset-password`,userResetPassword)
  }
}
