import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee = new Employee();

  constructor(private employeeservice:EmployeeService,private router:Router){

  }
  ngOnInit(): void {
   
  }

  saveEmployee(){
      this.employeeservice.createEmployee(this.employee).subscribe(data => {
         
       console.log(data);
       this.redirectPage();

      });
      

  }

  redirectPage(){
    this.router.navigate(['/employees'])

      
  }  


  onSubmit(){
   console.log(this.employee);
   this.saveEmployee();

  }

}
