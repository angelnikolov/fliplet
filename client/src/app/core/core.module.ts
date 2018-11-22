import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AlertsModule } from './components/alerts/alerts.module';
import { SearchModule } from './components/search/search.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, SearchModule, AlertsModule],
  exports: [SearchModule, AlertsModule],
  declarations: []
})
export class CoreModule {}
