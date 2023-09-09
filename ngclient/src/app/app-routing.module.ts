import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import EngineersListComponent
import { EngineersListComponent } from './engineers/components/engineers-list-component/engineers-list.component';

const routes: Routes = [
  { path: '', component: EngineersListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
