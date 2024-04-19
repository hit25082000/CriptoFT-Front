import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coin-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coin-list.component.html',
  styleUrl: './coin-list.component.scss',
})
export class CoinListComponent {
  coins: any[] = [];
  criptoMoedas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.http
      .get('https://api.coinranking.com/v2/coins')
      .subscribe((response: any) => {
        this.coins = response.data.coins;

        this.criptoMoedas = this.coins.slice(0, 30).map((moeda: any) => ({
          ...moeda,
          price: parseFloat(moeda.price).toFixed(5),
        }));
      });
  }
}
