import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class SearchModule {}
