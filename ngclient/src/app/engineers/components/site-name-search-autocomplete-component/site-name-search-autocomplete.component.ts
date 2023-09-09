import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, filter } from 'rxjs/operators';
import { EngineersService } from '../../services/engineers.service';
import { Engineer } from '../../engineer.model';

@Component({
  selector: 'app-site-name-search-autocomplete',
  templateUrl: './site-name-search-autocomplete.component.html',
  styleUrls: ['./site-name-search-autocomplete.component.scss']
})
export class SiteNameSearchAutocompleteComponent {
  @Output() searchResult = new EventEmitter<Engineer[]>();
  siteName = '';

  siteNameForm: FormGroup;

  constructor(
    private engineersService: EngineersService,
    private formBuilder: FormBuilder
    ) {
      this.siteNameForm = this.formBuilder.group({
        siteName: ["", [Validators.required]]
      });
      this.setupAutocomplete();

  }

  setupAutocomplete() {
    (this.siteNameControl as FormControl).valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter(query => !!query && query.trim().length > 0),
        switchMap((query: string) => this.engineersService.searchEngineerBySiteName(query))
      )
      .subscribe((result: Engineer[]) => {
        console.log('FullNameSearchAutocompleteComponent.result',result);
        this.searchResult.emit(result);
      }),
      (error: any) => {
        // Handle the error here
        console.error('Error occurred:', error);
        this.searchResult.emit([] as Engineer[]);
      };
  }

  // Getter for the form control
  get siteNameControl() {
    return this.siteNameForm.get('siteName');
  }
}