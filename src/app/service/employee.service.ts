import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private storageKey = 'employees';

  constructor() {
    if (!localStorage.getItem(this.storageKey)) {
      const initialData = [
        { id: 1, name: 'John Doe', email: 'john@example.com', salary: 50000 },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', salary: 60000 }
      ];
      localStorage.setItem(this.storageKey, JSON.stringify(initialData));
    }
  }

  private getEmployees(): Employee[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  private saveEmployees(employees: Employee[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(employees));
  }

  addEmployee(emp: Employee): Observable<Employee> {
    const employees = this.getEmployees();
    emp.id = employees.length ? Math.max(...employees.map(e => e.id)) + 1 : 1; // Generate a new ID
    employees.push(emp);
    this.saveEmployees(employees);
    return of(emp); 
  }

  getAllEmployee(): Observable<Employee[]> {
    return of(this.getEmployees()); 
  }

  updateEmployee(emp: Employee): Observable<Employee> {
    const employees = this.getEmployees();
    const index = employees.findIndex(e => e.id === emp.id);
    if (index > -1) {
      employees[index] = emp;
      this.saveEmployees(employees);
    }
    return of(emp); 
  }

  deleteEmployee(id: number): Observable<any> {
    let employees = this.getEmployees();
    employees = employees.filter(e => e.id !== id);
    this.saveEmployees(employees);
    return of({}); 
  }
}
