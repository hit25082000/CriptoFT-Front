import { UserService } from './../login/authentication/user/user.service';
import { User } from './../login/authentication/user/user';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router} from '@angular/router';

@Component({
  selector: 'app-loged',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loged.component.html',
  styleUrl: './loged.component.scss'
})
export class LogedComponent {
  user: User = new Object();

  constructor(private userService: UserService,private router: Router){
    this.userService.returnUser().subscribe((x)=>{
      console.log(x)
        this.user = x
    });
  }

  Logout(){
    this.userService.logout()
    this.router.navigate(['home']);
  }
}
