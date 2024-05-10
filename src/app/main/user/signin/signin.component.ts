import { NewUser } from './new-user';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SigninService } from './signin.service';
import { UserExistsService } from './user-exists.service';
import { MensageService } from '../../../components/mensage/mensage.service';
import {
  EqualsPasswordValidator,
  NumberValidator,
  SpecialCharValidator,
  UperCharValidator,
  UserEqualPasswordValidator,
} from './password-validator';
import { MensageComponent } from '../../../components/mensage/mensage.component';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, MensageComponent, RouterLink, CommonModule],
  providers: [FormBuilder],
  selector: 'app-novo-usuario',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  newUserForm!: FormGroup;
  loading = false;

  constructor(
    private toast: ToastrService,
    private formBuilder: FormBuilder,
    private signinService: SigninService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      {
        userName: ['', [Validators.required]],
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

  signin() {

    if (this.newUserForm.valid) {
      const novoUsuario = this.newUserForm.getRawValue() as NewUser;
      this.signinService.SigninNewUser(novoUsuario).subscribe(
        () => {
          this.toast.success('Email de confirmação enviado! Verifique seu E-mail');
          this.router.navigate(['home']);
        },
        (e) => {
          this.loading = false;
          var erros = e.error.reasons;
          console.log("erro")
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
