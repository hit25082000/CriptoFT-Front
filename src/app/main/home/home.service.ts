import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private requestsMade = 0;
  private maxRequestsPerHour = 14;

  constructor() { }

  checkRateLimit(): boolean {
    if (typeof localStorage !== 'undefined') {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();

      const lastHourString = localStorage.getItem('lastHour');
      const lastHour = lastHourString ? parseInt(lastHourString, 10) : null;

      if (lastHour === null || currentHour !== lastHour) {
        this.requestsMade = 0;
        localStorage.setItem('lastHour', currentHour.toString());
      }

      if (this.requestsMade >= this.maxRequestsPerHour) {
        return false;
      }
    }
    return true;
  }

  incrementRequestsMade() {
    this.requestsMade++;
  }
}
