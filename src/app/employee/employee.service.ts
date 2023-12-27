import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees:Employee[]=[];
  constructor(private http: HttpClient) {
    
   }

   getAllEmployees(){
    return this.http.get<Employee[]>('http://localhost:3000/employee');
   }

   getEmployeeById(id:number){
    return this.http.get<Employee>('http://localhost:3000/employee/'+id);
   }

   deleteEmployee(id:number){
    return this.http.delete<void>('http://localhost:3000/employee/'+id)
   }

   saveEmployee(employee:Employee){
      return this.http.post<Employee>('http://localhost:3000/employee/',employee);
   }


}
