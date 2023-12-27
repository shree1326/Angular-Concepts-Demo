import { Component, OnInit ,ViewChild} from '@angular/core';
import { Employee } from 'src/app/employee/employee';
import { EmployeeService } from 'src/app/employee/employee.service';
import { CalculatePayrollComponent } from '../calculate-payroll/calculate-payroll.component';
import { PayrollService } from '../payroll.service';
import { Payroll } from './payroll';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {

  employees!:Employee[];
  employee!:Employee;
  @ViewChild("viewChild") viewChild!: CalculatePayrollComponent;

  showAddPayroll!:Boolean;
  constructor(private payrollService:PayrollService) { }

  ngOnInit(): void {
    this.payrollService.getAllEmployees().subscribe((res:Employee[]) => {
      this.employees = res;
   });

  }


  showAddPayrollData(employee:Employee){
    this.showAddPayroll=true;
    this.employee=employee;
  }


}
