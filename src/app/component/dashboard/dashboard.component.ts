import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
})
export class DashboardComponent implements OnInit {

  empDetail!: FormGroup;
  empList: Employee[] = [];

  constructor(private formBuilder: FormBuilder, private empService: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployee();

    this.empDetail = this.formBuilder.group({
      id: [''],
      name: [''],
      salary: [''],
      email: ['']
    });
  }

  addEmployee() {
    const emp: Employee = this.empDetail.value;

    this.empService.addEmployee(emp).subscribe({
      next: (res) => {
        console.log('Add Response:', res);
        this.getAllEmployee();
      },
      error: (err) => {
        console.error('Add Error:', err);
      }
    });
  }

  getAllEmployee() {
    this.empService.getAllEmployee().subscribe({
      next: (res) => {
        this.empList = res;
      },
      error: () => {
        console.log("Error while fetching data.");
      }
    });
  }

  editEmployee(emp: Employee) {
    this.empDetail.patchValue(emp);
  }

  updateEmployee() {
    const emp: Employee = this.empDetail.value;

    this.empService.updateEmployee(emp).subscribe({
      next: (res) => {
        console.log('Update Response:', res);
        this.getAllEmployee();
      },
      error: (err) => {
        console.error('Update Error:', err);
      }
    });
  }

  deleteEmployee(emp: Employee) {
    this.empService.deleteEmployee(emp.id).subscribe({
      next: (res) => {
        console.log('Delete Response:', res);
        alert('Employee deleted successfully');
        this.getAllEmployee();
      },
      error: (err) => {
        console.error('Delete Error:', err);
      }
    });
  }
}
