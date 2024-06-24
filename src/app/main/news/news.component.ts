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
export class NewsComponent implements OnInit {
  carrossel = []
  articles: Article[] = []

  constructor(private newsService: NewsService ) {
  }

  ngOnInit(): void {
    this.articles = this.newsService.GetArticles();
  }
}
