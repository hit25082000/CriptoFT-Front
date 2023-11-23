import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  private cryptoDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>({});
  public cryptoData$: Observable<any> = this.cryptoDataSubject.asObservable();

  private updateSubject: Subject<void> = new Subject<void>();
  public updates$: Observable<void> = this.updateSubject.asObservable();

  constructor() {
    interval(5000)
      .pipe(take(10))
      .subscribe(() => {
        this.fetchCryptoData();
      });
  }

  private fetchCryptoData(): void {
    const updatedCryptoData = {
      bitcoinPrice: `$${Math.random() * 100000}`,
      ethereumPrice: `$${Math.random() * 5000}`,
      binanceCoinPrice: `$${Math.random() * 1000}`,
      example1Price: `$${Math.random() * 100}`,
      example2Price: `$${Math.random() * 50}`,
      example3Price: `$${Math.random() * 200}`,
      example4Price: `$${Math.random() * 75}`,
      example5Price: `$${Math.random() * 120}`,
      example6Price: `$${Math.random() * 90}`,
    };

    if (!this.isEqual(updatedCryptoData, this.cryptoDataSubject.value)) {
      this.cryptoDataSubject.next(updatedCryptoData);
      this.updateSubject.next();
    }
  }

  private isEqual(obj1: any, obj2: any): boolean {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }
}
