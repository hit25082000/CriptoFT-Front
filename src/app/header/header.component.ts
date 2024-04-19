import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable, Subscribable } from 'rxjs';
import { CoinListComponent } from '../coin-list/coin-list.component';

@Component({
  standalone: true,
  imports: [RouterLink,CommonModule,CoinListComponent],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  login = true
}
