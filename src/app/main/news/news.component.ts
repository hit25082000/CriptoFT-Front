import { Component } from '@angular/core';
import { NewsArticleComponent } from '../../components/news-article/news-article.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NewsArticleComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  carrossel = []
}
