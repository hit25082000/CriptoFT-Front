import { ClassroomService } from './../classroom.service';
import { Component, OnInit } from '@angular/core';
import { Video } from './Video';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent implements OnInit {

  courseId = this.activatedRoute.snapshot.queryParams["id"]
  videos: Video[] = []
  activeIndex = 0;
  video: Video = {
    VideoUrl: ""
  };

  constructor(private activatedRoute: ActivatedRoute,private classroomService: ClassroomService){
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params['id']
    })

    this.getCourseVideos()
  }

  getCourseVideos(){
    this.videos = this.classroomService.GetCourseVideos(this.courseId);
  }

  changeVideo(index: number){
    this.video = this.videos[index];
    this.activeIndex = index;
  }
}