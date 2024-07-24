// src/app/medical-details/medical-details.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medical-details',
  templateUrl: './medical-details.component.html',
  styleUrls: ['./medical-details.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class MedicalDetailsComponent implements OnInit {
  medicalDetails: any[] = [
    {
      id: 1001,
      policyName: 'xyz',
      salary: 500000,
      claimedAmount: 50000,
      numberOfDependents: 3,
    }
  ];

  ngOnInit() {
    this.calculatePolicyDetails();
  }

  calculatePolicyDetails() {
    this.medicalDetails.forEach(detail => {
      detail.policyMaxAmount = detail.salary < 500000 ? 1000000 : detail.salary * 2.5;
      detail.balanceLeft = detail.policyMaxAmount - detail.claimedAmount;
    });
  }
}
