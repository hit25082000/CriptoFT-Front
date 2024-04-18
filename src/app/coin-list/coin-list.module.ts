import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CoinListComponent } from './coin-list.component';

@NgModule({
  declarations: [CoinListComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [CoinListComponent],
})
export class CoinListModule {}
