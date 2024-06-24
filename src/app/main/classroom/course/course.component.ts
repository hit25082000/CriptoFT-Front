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

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params['id']
    })

    var videos = this.classroomService.GetCourseVideos(this.courseId)

    if (videos == null) {
      this.videos = JSON.parse(localStorage.getItem('videos') ?? '')
    } else {
      localStorage.setItem('videos', JSON.stringify(videos));
      this.videos = videos;
    }
  }

  changeVideo(index: number){
    this.video = this.videos[index];
    this.activeIndex = index;
  }
}
