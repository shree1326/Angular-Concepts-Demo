import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayrollComponent } from './payroll/payroll.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DailySalPipe } from './dailysal.pipe';
import { CalculatePayrollComponent } from './calculate-payroll/calculate-payroll.component';

const routes:Routes = [
  {path: '', component: PayrollComponent,
  children: [
    { path: 'calculate-payroll',component:CalculatePayrollComponent}
  ]} 
];

@NgModule({
  declarations: [
    PayrollComponent,
    DailySalPipe,
    CalculatePayrollComponent
  ],
  imports: [
    CommonModule,
     HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PayrollModule { }
