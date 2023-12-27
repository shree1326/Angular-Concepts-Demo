import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees!:Employee[];
  showAdd:Boolean=false;
  employee!:Employee;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe((res:Employee[]) => {
       this.employees = res;
    },
    (error) => {
      alert("Can not display all Employees");
    },
    () => {
      alert("Displaying All Employees")
    }
    ); 
  }
  
  showAddData(){
    this.showAdd=true;
  }

  deleteEmployee(employee:Employee){
    this.employeeService.deleteEmployee(employee.id).subscribe(res=>{
      this.employeeService.getAllEmployees().subscribe((res:Employee[]) => {
        this.employees = res;
     });
    });
  }

  addItem(newItem: Employee){
    this.employeeService.getAllEmployees().subscribe((res:Employee[]) => {
      this.employees = res;
   });
  }

}
