import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  @Input() loading = false;
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchTerm: ['', Validators.required]
    });
  }

  submit() {
    if (this.searchForm.valid) {
      this.onSearch.emit(this.searchForm.value.searchTerm);
    }
  }
  ngOnInit() {}
}
