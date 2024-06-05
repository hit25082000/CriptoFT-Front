import { CourseComponent } from './course/course.component';
import { TokenService } from './../user/login/authentication/token.service';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user/login/authentication/user/user.service';
import { Video } from './course/Video';
import { Course } from './catalog/Course';


@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
  isLoged = this.userService.isLoged()

  constructor(private http: HttpClient,private userService: UserService) {}

  GetUserVideos():Video[] {
    var userId;

    this.userService.returnUser().subscribe((x)=>{
      userId = x.id
    });

    var video: any

    this.http.post(`${environment.ApiUrl}/aulas-user`,{userId: userId}).subscribe((x)=>{
      video = x
    });

    return video;
  }

  GetCourseVideos(courseId: number):Video[]{
    var video: any

    this.http.post(`${environment.ApiUrl}/get-course-videos`,{courseId: courseId}).subscribe((x)=>{
      video = x
    });

    return video;
  }

  GetCourses(){
    var courses: any;

    this.http.get(`${environment.ApiUrl}/get-courses`).subscribe((x)=>{
      courses = x
    });

    return courses;
  }
}
