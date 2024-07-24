import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activeTab: string = 'medical-details'; 
  medicalPolicies: any[] = [
    {
      id: 1001,
      policyName: 'xyz',
      salary: 500000,
      claimedAmount: 50000,
      numberOfDependents: 3
    }
  ];

  constructor() { }

  ngOnInit(): void {
   
  }

  getPolicyMaxAmount(salary: number): number {
    return salary <= 500000 ? 1000000 : salary * 2.5;
  }

  getBalanceLeft(salary: number, claimedAmount: number): number {
    return this.getPolicyMaxAmount(salary) - claimedAmount;
  }
}
