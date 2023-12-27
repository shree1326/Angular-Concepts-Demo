import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  constructor(private http: HttpClient,private employeeService:EmployeeService) {

   }

   getAllEmployees(){
    return this.employeeService.getAllEmployees();
   }
}
