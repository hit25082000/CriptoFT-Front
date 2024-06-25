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

  GetArticles() {
    return this.http.get<Article[]>(`${environment.ApiUrl}/get-articles`)
  }
}
