import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ClassroomService } from './classroom.service';
import { Video } from './Video';
import { UserService } from '../user/login/authentication/user/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classroom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classroom.component.html',
  styleUrl: './classroom.component.scss'
})
export class ClassroomComponent implements OnInit {
  loged: boolean = this.userService.isLoged()

constructor(private classroomService: ClassroomService,private userService: UserService){}

  ngOnInit(): void {
    // setTimeout(function(){document.querySelector('#placeHolder')!.innerHTML = ``}, 1000)
  }

  async RenderVideos(){
    var video = (this.classroomService.GetUserVideos()).forEach(video => {
      `<div class="card" style="width: 18rem;">
      <img src="../../../assets/img/bitcoin.png" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">${video.Titulo}</h5>
      <p class="card-text">${video.Descricao}</p>
      <a href="${video.VideoUrl}" class="btn btn-primary">Link</a>
      </div>
      </div>`
    });

    return video;
  }
}
