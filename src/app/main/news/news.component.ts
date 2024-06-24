import { Subscribable } from 'rxjs';
import { ClassroomService } from './../classroom/classroom.service';
import { Component, OnInit } from '@angular/core';
import { NewsArticleComponent } from '../../components/news-article/news-article.component';
import { Article } from './Article';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NewsArticleComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit{
  carrossel = []
  articles: Article[] = []

  constructor(private newsService: NewsService ) {
  }

  ngOnInit(): void {
    var articles = this.newsService.GetArticles()

    if (articles == null) {
      this.articles = JSON.parse(localStorage.getItem('articles') ?? '')
    } else {
      localStorage.setItem('articles', JSON.stringify(articles));
      this.articles = articles;
    }
  }
}
