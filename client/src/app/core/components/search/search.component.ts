import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { urlValidator } from '../../../shared/validators/url.validator';
import { AlertsService } from '../alerts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  @Input() loading = false;
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  constructor(private fb: FormBuilder, private alertService: AlertsService) {
    this.searchForm = this.fb.group({
      searchTerm: ['', [Validators.required, urlValidator]]
    });
  }

  submit() {
    if (this.searchForm.valid) {
      this.onSearch.emit(this.searchForm.value.searchTerm);
    } else {
      this.alertService.showAlert(
        this.deriveErrorMessage(this.searchForm.controls.searchTerm),
        1500
      );
    }
  }

  private deriveErrorMessage(formControl: AbstractControl) {
    if (formControl.errors.required) {
      return 'The field is required.';
    } else if (formControl.errors.url) {
      return 'The field does not contain a valid url.';
    }
  }
  ngOnInit() {}
}
