import { Component, OnInit } from '@angular/core';
//import { HomeService } from './home.service';
import { CommonModule } from '@angular/common';

interface News {
  title: string;
  url: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  videos = [
    {
      title: 'CURSO CRIPTOMOEDAS PARA INICIANTES - AULA 01',
      url: 'https://www.youtube.com/watch?v=aLh2mV4YhTQ&list=PLBkmE8K0RM0stkjXnYgesj98sOwNL8iZj',
    },
    {
      title: 'CURSO CRIPTOMOEDAS PARA INICIANTES - AULA 02',
      url: 'https://www.youtube.com/watch?v=05OEeim1dmE&list=PLBkmE8K0RM0stkjXnYgesj98sOwNL8iZj',
    },
    {
      title: 'CURSO CRIPTOMOEDAS PARA INICIANTES - AULA 03',
      url: 'https://www.youtube.com/watch?v=r69vVqjKj20&list=PLBkmE8K0RM0stkjXnYgesj98sOwNL8iZj',
    },
    {
      title: 'CURSO CRIPTOMOEDAS PARA INICIANTES - AULA 04',
      url: 'https://www.youtube.com/watch?v=AgBnzTrHrGI&list=PLBkmE8K0RM0stkjXnYgesj98sOwNL8iZj',
    },
    {
      title: 'CURSO CRIPTOMOEDAS PARA INICIANTES - AULA 05',
      url: 'https://www.youtube.com/watch?v=BLvuXIRd9PE&list=PLBkmE8K0RM0stkjXnYgesj98sOwNL8iZj',
    },
    {
      title: 'CURSO CRIPTOMOEDAS PARA INICIANTES - AULA 06',
      url: 'https://www.youtube.com/watch?v=ifYGtQeTM90&list=PLBkmE8K0RM0stkjXnYgesj98sOwNL8iZj',
    },
  ];

  news: News[] = [
    {
      title: 'Notícia 1',
      url: 'URL_DA_NOTICIA_1'
    },
    {
      title: 'Notícia 2',
      url: 'URL_DA_NOTICIA_2'
    },
    {
      title: 'Notícia 2',
      url: 'URL_DA_NOTICIA_2'
    },
    {
      title: 'Notícia 2',
      url: 'URL_DA_NOTICIA_2'
    },
    {
      title: 'Notícia 2',
      url: 'URL_DA_NOTICIA_2'
    },
    {
      title: 'Notícia 2',
      url: 'URL_DA_NOTICIA_2'
    },
  ];

  scrollLeftVideos() {
    const container = document.querySelector('.videos-container');
    if (container) {
      container.scrollLeft -= 200;
    }
  }

  scrollRightVideos() {
    const container = document.querySelector('.videos-container');
    if (container) {
      container.scrollLeft += 200;
    }
  }

  scrollLeftNews() {
    const container = document.querySelector('.news-container');
    if (container) {
      container.scrollLeft -= 200;
    }
  }

  scrollRightNews() {
    const container = document.querySelector('.news-container');
    if (container) {
      container.scrollLeft += 200;
    }
  }

  constructor() {}
}
