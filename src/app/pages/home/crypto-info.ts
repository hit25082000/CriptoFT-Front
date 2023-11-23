import { Injectable } from '@angular/core';
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root',
})
export class CryptoInfo {
  public bitcoinPrice: string = '';
  public ethereumPrice: string = '';
  public binanceCoinPrice: string = '';
  public example1Price: string = '';
  public example2Price: string = '';
  public example3Price: string = '';
  public example4Price: string = '';
  public example5Price: string = '';
  public example6Price: string = '';

  constructor(private cryptoService: CryptoService) {
    this.cryptoService.cryptoData$.subscribe((cryptoData) => {
      this.bitcoinPrice = cryptoData.bitcoinPrice;
      this.ethereumPrice = cryptoData.ethereumPrice;
      this.binanceCoinPrice = cryptoData.binanceCoinPrice;
      this.example1Price = cryptoData.example1Price;
      this.example2Price = cryptoData.example2Price;
      this.example3Price = cryptoData.example3Price;
      this.example4Price = cryptoData.example4Price;
      this.example5Price = cryptoData.example5Price;
      this.example6Price = cryptoData.example6Price;
    });

    this.cryptoService.updates$.subscribe(() => {
      // Faça algo quando houver uma atualização (opcional)
    });
  }
}

