import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'news-article',
  standalone: true,
  imports: [],
  templateUrl: './news-article.component.html',
  styleUrl: './news-article.component.scss'
})
export class NewsArticleComponent {
@Input() theme = ''
@Input() date = ''
@Input() url = ''
@Input() imgPath = ''
}
