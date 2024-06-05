import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ClassroomService } from './classroom.service';
import { Video } from './course/Video';
import { UserService } from '../user/login/authentication/user/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-classroom',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './classroom.component.html',
  styleUrl: './classroom.component.scss'
})
export class ClassroomComponent {

}
