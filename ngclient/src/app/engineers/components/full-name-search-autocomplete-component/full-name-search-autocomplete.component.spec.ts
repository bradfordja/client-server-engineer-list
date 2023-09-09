import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullNameSearchAutocompleteComponent } from './full-name-search-autocomplete.component';

describe('FullNameSearchAutocompleteComponent', () => {
  let component: FullNameSearchAutocompleteComponent;
  let fixture: ComponentFixture<FullNameSearchAutocompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullNameSearchAutocompleteComponent]
    });
    fixture = TestBed.createComponent(FullNameSearchAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
