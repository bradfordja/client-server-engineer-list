import { Component } from '@angular/core';
import { EngineersService } from '../../services/engineers.service';
import { Engineer } from '../../engineer.model';

@Component({
  selector: 'app-engineers-list',
  templateUrl: './engineers-list.component.html',
  styleUrls: ['./engineers-list.component.scss']
})
export class EngineersListComponent {
  engineers: Engineer[] = [];
  sortOrder: 'asc' | 'desc' = 'asc';
  sortByColumn: keyof Engineer = 'firstName';

  constructor(private engineersService: EngineersService) { }

  ngOnInit() {
    this.loadEngineers();
  }

  loadEngineers() {
    this.engineersService.getAllEngineers().subscribe(engineers => {
      console.log(engineers);
      this.engineers = engineers;
      // this.sort(this.sortByColumn); // Initial sorting by first name
    });
  }

  searchResult(result: any) {
    console.log('result engineers',result);
    this.engineers = result;
  }

  sort(column: keyof Engineer) {
    if (this.sortByColumn === column) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortOrder = 'asc';
      this.sortByColumn = column;
    }
    /*
    this.engineers.sort((a, b) => {
      const valueA = a[column]?.toLowerCase();
      const valueB = b[column]?.toLowerCase();

      if (this.sortOrder === 'asc') {
        return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
      } else {
        return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
      }
    });
    */
  }
}