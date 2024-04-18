import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CoinListModule } from '../../coin-list/coin-list.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CoinListModule,
    HttpClientModule,
    // Importe o CoinListModule aqui
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
