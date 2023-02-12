import { Employee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8060/api/v1";

  constructor(private HttpClient:HttpClient ) { 

  }
  getEmployeeList():Observable<Employee[]>{ 
    return this.HttpClient.get<Employee[]>(`${this.baseUrl}/gatemployee`);

  }

  createEmployee(employee:Employee):Observable<Object>{
    return this.HttpClient.post(`${this.baseUrl}/saveemployee`,employee);

  }
  getemployeeById(id:number|undefined):Observable<Employee>{
    return this.HttpClient.get<Employee>(`${this.baseUrl}/gatemployee/${id}`);

  }
  updateEmployeeByID(id:number|undefined,employee:Employee):Observable<Object>{
    return this.HttpClient.put<Employee>(`${this.baseUrl}/updateemployee/${id}`,employee);

  }
  deleteEmployeeById(id:number|undefined):Observable<any>{
    return this.HttpClient.delete(`${this.baseUrl}/employeedelete/${id}`);

  }
}
