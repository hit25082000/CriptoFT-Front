import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { SigninService } from './signin.service';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserExistsService {
  constructor(private signinService: SigninService) {}

  userAlreadyExists() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) =>
          this.signinService.VerifyUserExists(nomeUsuario)
        ),
        map((usuarioExiste) =>
          usuarioExiste ? { usuarioExistente: true } : null
        ),
        first()
      );
    };
  }
}
