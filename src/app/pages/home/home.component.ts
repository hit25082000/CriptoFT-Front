import { Component, OnInit } from '@angular/core';
import { CryptoInfo } from './crypto-info';
import { CryptoService } from './crypto.service';

@Component({
  selector: 'app-principal',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cryptoInfo: CryptoInfo;

  constructor(private _cryptoInfo: CryptoInfo, private cryptoService: CryptoService) {
    this.cryptoInfo = _cryptoInfo;
  }

  ngOnInit(): void {
  }
}