import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  alerts: Array<string> = [];
  constructor() {}

  showAlert(text: string, duration: number) {
    this.alerts.push(text);
    setTimeout(() => {
      this.alerts.shift();
    }, duration);
  }
}
