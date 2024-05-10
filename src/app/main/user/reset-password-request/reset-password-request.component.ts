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
import { ToastrService } from 'ngx-toastr';

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
    private toast: ToastrService,
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
          this.toast.success('Solicitação enviada verifique seu E-mail');
          this.router.navigate(['home/']);
        },
        (e) => {
          var erros = e.error.reasons;

          switch (erros[0].message) {
            case 'Failed : DuplicateUserName':
              this.toast.error('Usúario já cadastrado');
              break;
            default:
              this.toast.error(erros[0].message);
              break;
          }
        }
      );
    }
  }
}
