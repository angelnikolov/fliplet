import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SearchModule } from './components/search/search.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, SearchModule],
  exports: [SearchModule],
  declarations: []
})
export class CoreModule {}
