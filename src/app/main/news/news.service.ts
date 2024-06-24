import { Injectable } from '@angular/core';
import { UserService } from '../user/login/authentication/user/user.service';
import { HttpClient } from '@angular/common/http';
import { Article } from './Article';
import { environment } from '../../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient,private userService: UserService) {}

  GetArticles():Article[] {
    var articles: any

    this.http.get(`${environment.JsonUrl}/get-articles`).subscribe((x)=>{
      articles = x
    });

    return articles;
  }
}
