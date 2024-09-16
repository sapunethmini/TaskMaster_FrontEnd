import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-all-employee',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './view-all-employee.component.html',
  styleUrl: './view-all-employee.component.css',
})
export class ViewAllEmployeeComponent {
  public employeeList: any;
  constructor(private http: HttpClient) {
    this.loadEmpTable();
  }
  loadEmpTable() {
    this.http
      .get('http://localhost:8080/emp-controller/get-all')
      .subscribe((Response) => {
        this.employeeList = Response;
        console.log(Response);
      });
  }
}
