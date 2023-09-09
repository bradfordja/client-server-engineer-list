import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, filter } from 'rxjs/operators';
import { EngineersService } from '../../services/engineers.service';
import { Engineer } from '../../engineer.model';

@Component({
  selector: 'app-full-name-search-autocomplete',
  templateUrl: './full-name-search-autocomplete.component.html',
  styleUrls: ['./full-name-search-autocomplete.component.scss']
})
export class FullNameSearchAutocompleteComponent {
  @Output() searchResult = new EventEmitter<Engineer[]>();
  fullName = '';

  fullNameForm: FormGroup;

  constructor(
    private engineersService: EngineersService,
    private formBuilder: FormBuilder) 
  {
    this.fullNameForm = this.formBuilder.group({
      fullName: ["", [Validators.required]]  // <-- Changed from siteName to fullName
    });

    this.setupAutocomplete();
  }

  setupAutocomplete() {
    (this.fullNameControl as FormControl).valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter(query => !!query && query.trim().length > 0),
        switchMap((query: string) => this.engineersService.searchEngineers(query))
      )
      .subscribe((result: Engineer[]) => {
        console.log('FullNameSearchAutocompleteComponent.result',result);
        this.searchResult.emit(result);
      }),
      (error: any) => {
        // Handle the error here
        console.error('Error occurred:', error);
        this.searchResult.emit([] as Engineer[]);
      };;
  }

  // Getter for the form control
  get fullNameControl() {
    return this.fullNameForm.get('fullName');
  }
}
