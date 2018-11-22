import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';

fdescribe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;

    spyOn(component.onSearch, 'emit');
    fixture.detectChanges();
  });

  describe('#submit', () => {
    it('if form is valid, it should call onSearch.emit', () => {
      const validUrl = 'http://www.valid.com';
      component.searchForm.patchValue({ searchTerm: validUrl });
      expect(component).toBeTruthy();
      component.submit();

      expect(component.onSearch.emit).toHaveBeenCalledWith(validUrl);
    });
    it('if form is not valid, it should not call onSearch.emit', () => {
      const validUrl = 'd  invalid.com';
      component.searchForm.patchValue({ searchTerm: validUrl });
      expect(component).toBeTruthy();
      component.submit();

      expect(component.onSearch.emit).not.toHaveBeenCalled();
    });
  });
});
