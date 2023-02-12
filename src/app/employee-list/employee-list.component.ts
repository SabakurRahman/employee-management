import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  employees:Employee[] | undefined;
  
  constructor( private employeeservice:EmployeeService,private router:Router){

  }
  
  ngOnInit(): void {
    this.getEmployees();
   
  }

  private getEmployees(){
    this.employeeservice.getEmployeeList().subscribe(data => { 
      console.log(data);
      this.employees = data;

    });

  }

  updateEmploye(id: number|undefined) {
    this.router.navigate(['update-employee',id]);

   
    }

    deleteEmploye(id: number|undefined) {
      this.employeeservice.deleteEmployeeById(id).subscribe(data =>{
        console.log(data);
        this.getEmployees();

      });
      
      }

}
