import { ResetPasswordService } from './../login/reset-password.service';
import { UserResetPassword } from './user-reset-password';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MensageService } from '../../../components/mensage/mensage.service';
import {
  EqualsPasswordValidator,
  NumberValidator,
  SpecialCharValidator,
  UperCharValidator,
  UserEqualPasswordValidator,
} from '../signin/password-validator';
import { MensageComponent } from '../../../components/mensage/mensage.component';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  providers: [FormBuilder],
  imports: [ReactiveFormsModule, MensageComponent, RouterLink, CommonModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})

export class ResetPasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup;
  loading = false;

  constructor(
    private toast: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private resetPasswordService: ResetPasswordService
  ) {}


  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group(
      {
        token: [this.activatedRoute.snapshot.queryParams["token"], [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
            ,
            SpecialCharValidator.bind(this),
            UperCharValidator.bind(this),
            NumberValidator.bind(this),
          ],
        ],
        repassword: [
          '',
          [Validators.required, EqualsPasswordValidator.bind(this)],
        ],
      },
      {
        validators: [UserEqualPasswordValidator],
      }
    );
  }

  ResetPassword() {
    if (this.resetPasswordForm.valid) {
      const userResetPassword = this.resetPasswordForm.getRawValue() as UserResetPassword;
      this.resetPasswordService.ResetPassword(userResetPassword).subscribe(
        () => {
          this.router.navigate(['home']);
          this.toast.success("Senha alterada com sucesso!");
        },
        (e) => {
          var erros = e.error.reasons

          switch(erros[0].message){
            case "Failed : DuplicateUserName":
                this.toast.error("Usúario já cadastrado");
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
