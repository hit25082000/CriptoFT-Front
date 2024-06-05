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
  videos: Video[] = [{VideoUrl: "https://www.youtube.com/embed/aLh2mV4YhTQ?list=PLBkmE8K0RM0stkjXnYgesj98sOwNL8iZj" , Descricao: "Começando bem"},{Descricao: "BlockChains", VideoUrl: "https://www.youtube.com/embed/05OEeim1dmE?list=PLBkmE8K0RM0stkjXnYgesj98sOwNL8iZj"}]
  activeIndex = 0;
  video: Video = {
    VideoUrl: "https://www.youtube.com/embed/aLh2mV4YhTQ?list=PLBkmE8K0RM0stkjXnYgesj98sOwNL8iZj"
  };

  constructor(private activatedRoute: ActivatedRoute,private classroomService: ClassroomService){
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params['id']
  })}

  getCourseVideos(){
    this.videos = this.classroomService.GetCourseVideos(this.courseId);
  }

  changeVideo(index: number){
    this.video = this.videos[index];
    this.activeIndex = index;
  }
}
