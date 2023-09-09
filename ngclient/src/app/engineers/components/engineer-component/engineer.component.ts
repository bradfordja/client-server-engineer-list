import { Component, OnInit } from '@angular/core';
import { Engineer } from '../../engineer.model';
import { EngineersService } from '../../services/engineers.service';

@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.scss']
})
export class EngineerComponent implements OnInit {

  engineer: Engineer = {
    firstName: '',
    lastName: '',
    fullName: '',
    title: '',
    siteName: '',
  };
  
  isUpdateEnabled = false;
  
  sites = [];  // Assuming sites data structure
  statuses = [];  // Assuming statuses data structure

  constructor(private engineerService: EngineersService) {}

  ngOnInit(): void {
    // Initialize data if needed
  }

  createEngineer() {
    this.engineerService.createEngineer(this.engineer).subscribe(response => {
      // Handle success response
      console.log('Engineer created:', response);
      this.resetForm();
    }, error => {
      // Handle error
      console.error('Error creating engineer:', error);
    });
  }

  updateEngineer() {
    this.engineerService.updateEngineer(this.engineer).subscribe(response => {
      // Handle success response
      console.log('Engineer updated:', response);
      this.resetForm();
    }, error => {
      // Handle error
      console.error('Error updating engineer:', error);
    });
  }

  cancelEngineer() {
    this.resetForm();
  }

  private resetForm() {
    this.engineer = {
      firstName: '',
      lastName: '',
      fullName: '',
      title: '',
      siteName: '',
    };
    this.isUpdateEnabled = false;
  }
}
