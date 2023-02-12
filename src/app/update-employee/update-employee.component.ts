import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee:Employee = new Employee();
  id: number | undefined;

  constructor(private employeeservice:EmployeeService,private router:ActivatedRoute,private router1:Router){

  }
  ngOnInit(): void {
     this.id= this.router.snapshot.params['id'];
     console.log(this.id);
     this.employeeservice.getemployeeById(this.id).subscribe(data=> {
    this.employee=data;
    
    }
 );
   
  }

  updateEmployee(){
    
      this.employeeservice.updateEmployeeByID(this.id,this.employee).subscribe(data => {
         
       console.log(data);
       this.redirectPage();

      });

}
redirectPage(){
  this.router1.navigate(['/employees'])

    
}  


onSubmit(){
 console.log(this.employee);
 this.updateEmployee();

}

}
