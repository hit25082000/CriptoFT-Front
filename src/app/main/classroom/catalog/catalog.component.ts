import { Title } from '@angular/platform-browser';
import { Course } from './Course';
import { Component, OnInit } from '@angular/core';
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
export class CatalogComponent implements OnInit {
  courses: Course[] = []

  constructor(private classroomService: ClassroomService, private userService: UserService) { }

  ngOnInit(): void {
    this.classroomService.GetCourses().subscribe((data: Course[]) => {
    if (data == null) {
      this.courses = JSON.parse(localStorage.getItem('courses') ?? '')
    } else {
      localStorage.setItem('courses', JSON.stringify(data));
      this.courses = data;
    }
    this.courses = data;
  });
  }

}
