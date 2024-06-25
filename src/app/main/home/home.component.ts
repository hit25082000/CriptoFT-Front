import { Component, OnInit } from '@angular/core';
import { CoinListComponent } from '../../components/coin-list/coin-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CoinListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

