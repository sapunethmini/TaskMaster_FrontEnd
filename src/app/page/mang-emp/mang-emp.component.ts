import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-mang-emp',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './mang-emp.component.html',
  styleUrl: './mang-emp.component.css',
})
export class MangEmpComponent {
  public employeeObj = {
    firstname: '',
    lastname: '',
    email: '',
    department_Id: '',
    role_Id: '',
  };
  //department_Id;
  // private String role_Id;
  constructor(private http: HttpClient) {}
  addEmployee() {
    this.http
      .post(
        'http://localhost:8080/emp-controller/add-employee',
        this.employeeObj
      )
      .subscribe((Response) => {
        console.log(Response);
      });
  }
}
