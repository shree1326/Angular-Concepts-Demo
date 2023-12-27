import { Component, DoCheck, Input, OnChanges, OnInit, Output,EventEmitter, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  @Input() employee!:Employee;
  @Output() newItemEvent=new EventEmitter<Employee>();
  employeeForm!:FormGroup;


  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
       name:new FormControl('', Validators.required),
       email:new FormControl('',Validators.email),
       department:new FormControl('',[Validators.required,Validators.maxLength(10)]),
       joiningDate:new FormControl(),
       birthDate:new FormControl(),
       salary:new FormControl('',Validators.minLength(4)),
       designation:new FormControl()
     });
  }
  addEmployee(){
    this.employee=this.employeeForm.value;
    this.employeeService.saveEmployee(this.employee).subscribe((res:Employee) => {
      this.employee = res;
      this.employeeForm.reset();
      this.newItemEvent.emit(this.employee);

   });
   
  }
}
