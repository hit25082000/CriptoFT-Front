import { ResetPasswordService } from '../login/reset-password.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {  Router, RouterLink } from '@angular/router';
import { MensageComponent } from '../../../components/mensage/mensage.component';
import { CommonModule } from '@angular/common';
import { MensageService } from '../../../components/mensage/mensage.service';

@Component({
  selector: 'app-reset-password-request',
  standalone: true,
  imports: [ReactiveFormsModule, MensageComponent, RouterLink, CommonModule],
  templateUrl: './reset-password-request.component.html',
  styleUrl: './reset-password-request.component.scss'
})
export class ResetPasswordRequestComponent {
  resetPasswordRequestForm!: FormGroup;

  constructor(
    private mensageService: MensageService,
    private formBuilder: FormBuilder,
    private router: Router,
    private resetPasswordService: ResetPasswordService
  ) {}

  ngOnInit(): void {
    this.resetPasswordRequestForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
      },
    );
  }

  resetPasswordRequest(){
    if (this.resetPasswordRequestForm.valid) {
      const form = this.resetPasswordRequestForm.getRawValue();
      this.resetPasswordService.ResetPasswordRequest(form.email).subscribe(
        () => {
          this.mensageService.SuccessMensage('Solicitação enviada verifique seu E-mail');
          this.router.navigate(['home/']);
        },
        (e) => {
          var erros = e.error.reasons;

          switch (erros[0].message) {
            case 'Failed : DuplicateUserName':
              this.mensageService.ErrorMensage('Usúario já cadastrado');
              break;
            default:
              this.mensageService.SuccessMensage(erros[0].message);
              break;
          }
        }
      );
    }
  }
}
