import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router, RouterLink, RouterOutlet} from '@angular/router';
import { FormBuilder, FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
import { RecaptchaService } from '../../../components/recaptcha/recaptcha.service';
import { MensageService } from '../../../components/mensage/mensage.service';
import { AuthenticationService } from './authentication/authentication.service';
import { TokenService } from './authentication/token.service';
import { RecaptchaComponent } from '../../../components/recaptcha/recaptcha.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  standalone:true,
  imports:[RouterLink,RecaptchaComponent,ReactiveFormsModule,CommonModule,HttpClientModule, RouterOutlet],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  captchaStatus:any = '';

  captchaConfig:any = {
    type:2,
    length:6,
    cssClass:'custom',
    back: {
     stroke:"#2F9688",
     solid:"#f2efd2"
    } ,
    font:{
      color:"#000000",
      size:"35px"
    }
  };

  loginForm!: FormGroup;
Sign: any;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private mensageService: MensageService,
    private tokenService: TokenService,
    private renderer: Renderer2,
    private el: ElementRef,
    private recaptchaService:RecaptchaService) {
      this.recaptchaService.captchStatus.subscribe((status)=>{
        this.captchaStatus = status;
        if (status == true) {
          this.loginForm.get('captcha')!.updateValueAndValidity();
        }
      });
    }

    ngOnInit(): void {
      this.loginForm = this.formBuilder.group(
        {
          userName: ['', [Validators.required]],
          senha: ['',Validators.required],
          captcha: ['', [this.captchaValidator.bind(this)], Validators.required]
        },
    );
  }

  captchaValidator() {
    if (this.captchaStatus != true) {
      return { invalidCaptcha: true,require: true };
    }
    return null;
  }

  login() {
    this.authenticationService.authenticate(this.loginForm.get('userName')?.value, this.loginForm.get('senha')?.value).subscribe(
      (response: any) => {
        var token = response[0].message;
        this.router.navigate(['principal']);
        this.tokenService.saveToken(token);
      },
      (error: any) => {
        this.mensageService.ErrorMensage(error);
        console.log(error)
      }
    );
  }
}
