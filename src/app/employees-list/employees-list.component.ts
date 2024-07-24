import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
  standalone:true,
  imports:[RouterOutlet,CommonModule, DashboardComponent, ReactiveFormsModule]
})
export class EmployeesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
