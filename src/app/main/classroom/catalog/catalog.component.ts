import { Title } from '@angular/platform-browser';
import { Course } from './Course';
import { Component } from '@angular/core';
import { ClassroomService } from '../classroom.service';
import { UserService } from '../../user/login/authentication/user/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  courses: Course[] = []

  constructor(private classroomService: ClassroomService,private userService: UserService){}

  ngOnInit(): void {
    this.GetCourses()
  }

  GetCourses(){
    this.courses = this.classroomService.GetCourses();
  }
}
