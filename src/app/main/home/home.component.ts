import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HomeService } from './home.service';


interface News {
  title: string;
  url: string;
}
interface Crypto {
  symbol: string;
  icon: string;
  price: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  cryptos: Crypto[] = [];

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

  constructor(private http: HttpClient, private homeService: HomeService) {}

  ngOnInit(): void {
    if (this.homeService.checkRateLimit()) {
      this.fetchCryptoData();
    } else {
      console.error('Limite de taxa excedido. Espere até a próxima hora para fazer mais solicitações.');
    }
  }

  fetchCryptoData() {
    const params = new HttpParams()
      .set('vs_currency', 'usd')
      .set('order', 'market_cap_desc')
      .set('per_page', '10')
      .set('page', '1');

    this.http.get<any>('https://api.coingecko.com/api/v3/coins/markets', { params: params }).subscribe(
      (response) => {
        this.cryptos = response.map((crypto: any) => ({
          symbol: crypto.symbol.toUpperCase(),
          icon: crypto.image,
          price: parseFloat(crypto.current_price).toFixed(2)
        }));
        this.homeService.incrementRequestsMade();
      },
      (error) => {
        console.error('Erro ao obter dados de criptomoedas:', error);
      }
    );
  }
}
