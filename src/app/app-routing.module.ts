import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalDetailsComponent } from './medical-details/medical-details.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
  { path: 'employees-list', component: EmployeesListComponent },
  { path: 'medical-details', component: MedicalDetailsComponent },
  { path: 'charts', component: ChartsComponent },
  { path: '', redirectTo: '/employees-list', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }