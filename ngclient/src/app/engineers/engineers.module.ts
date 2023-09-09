import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EngineersListComponent } from './components/engineers-list-component/engineers-list.component';
import { FullNameSearchAutocompleteComponent } from './components/full-name-search-autocomplete-component/full-name-search-autocomplete.component';
import { SiteNameSearchAutocompleteComponent } from './components/site-name-search-autocomplete-component/site-name-search-autocomplete.component';
/*
import { EngineerComponent } from './components/engineer-component/engineer.component';
import { SiteLocationComponent } from './components/site-location-component/site-location.component';
*/


@NgModule({
  declarations: [
    EngineersListComponent,
    FullNameSearchAutocompleteComponent,
    SiteNameSearchAutocompleteComponent,
    /*
    EngineerComponent,
    SiteLocationComponent
    */
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class EngineersModule { }
