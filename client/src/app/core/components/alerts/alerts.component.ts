import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../alerts.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  alerts: Array<string> = this.alertService.alerts;
  constructor(private alertService: AlertsService) {}

  ngOnInit() {}
}
