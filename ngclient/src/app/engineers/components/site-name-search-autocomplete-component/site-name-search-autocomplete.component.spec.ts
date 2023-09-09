import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteNameSearchAutocompleteComponent } from './site-name-search-autocomplete.component';

describe('SiteNameSearchAutocompleteComponent', () => {
  let component: SiteNameSearchAutocompleteComponent;
  let fixture: ComponentFixture<SiteNameSearchAutocompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteNameSearchAutocompleteComponent]
    });
    fixture = TestBed.createComponent(SiteNameSearchAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
