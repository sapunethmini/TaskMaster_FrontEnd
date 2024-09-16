import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { NavComponent } from '../../common/nav/nav.component';

@Component({
  selector: 'app-add-emp',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule,NavComponent],
  templateUrl: './add-emp.component.html',
  styleUrl: './add-emp.component.css',
})
export class AddEmpComponent {
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
        Swal.fire({
          title: ' Employee Added!',
          text: 'Thank you for joining us!',
          icon: 'success',
        });
      });
  }
}
