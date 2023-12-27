import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'employee', loadChildren: () => import(`./employee/employee.module`).then(m => m.EmployeeModule)},
  {path:'payroll',loadChildren: () => import(`./payroll/payroll.module`).then(m => m.PayrollModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
