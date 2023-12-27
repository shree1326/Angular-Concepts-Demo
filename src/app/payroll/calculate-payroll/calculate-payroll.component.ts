import { AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnInit } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Employee } from 'src/app/employee/employee';
import { Payroll } from '../payroll/payroll';

@Component({
  selector: 'app-calculate-payroll',
  templateUrl: './calculate-payroll.component.html',
  styleUrls: ['./calculate-payroll.component.css']
})
export class CalculatePayrollComponent implements OnInit,DoCheck ,AfterViewInit,AfterViewChecked{

  @Input() employee!:Employee;
  payroll:Payroll={
    employeeId: 0,
    workingDays: 0,
    date: new Date(),
    salary: 0
  };
  constructor() { }
  ngAfterViewInit(): void {
    console.log("In ngAfterViewInit ");
  }
  ngAfterViewChecked(): void {
    console.log("In ngAfterViewChecked")
  }

  ngDoCheck(): void {
    this.payroll.employeeId=this.employee.id;
  }

  ngOnInit(): void {
  }

  addPayroll(){
    this.payroll.salary=this.payroll.workingDays*1100;
  }

  daysInMonth (date:Date) {
    debugger;
    const tempDate=new Date(date);
    console.log(tempDate.getFullYear(),tempDate.getMonth())
    this.payroll.workingDays= new Date(tempDate.getFullYear(), tempDate.getMonth()+1, 0).getDate();
}

}
