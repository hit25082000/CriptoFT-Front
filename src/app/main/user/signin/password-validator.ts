import { AbstractControl, FormGroup } from '@angular/forms';

export function UserEqualPasswordValidator(formGroup: FormGroup) {
  const username = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('password')?.value ?? '';

  if (username.trim() + password.trim()) {
    return username !== password ? null : { senhaIgualUsuario: true };
  } else {
    return null;
  }
}

export function EqualsPasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const senha = control.root.get('password');
  const confirmacaoSenha = control.value;
  if (senha && confirmacaoSenha !== senha.value) {
    return { senhasDiferentes: true };
  }
  return null;
}

export function SpecialCharValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const caracterEspecial = /[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
  const senha = control.value;
  if (!caracterEspecial.test(senha)) {
    return { semCaracterEspecial: true };
  }
  return null;
}

export function UperCharValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const letraMaiuscula = /[A-Z]/;
  const senha = control.value;
  if (!letraMaiuscula.test(senha)) {
    return { semLetraMaiuscula: true };
  }
  return null;
}

export function NumberValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const numero = /[0-9]/;
  const senha = control.value;
  if (!numero.test(senha)) {
    return { semNumero: true };
  }
  return null;
}
