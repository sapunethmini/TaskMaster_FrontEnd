import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavComponent } from '../../common/nav/nav.component';

@Component({
  selector: 'app-view-all-employee',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, NavComponent],
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

  deleteEmp(employee: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.http
          .delete(
            `http://localhost:8080/emp-controller/delete-emp/${employee.id}`,
            { responseType: 'text' }
          )

          .subscribe((Response) => {
            this.loadEmpTable();
            Swal.fire({
              title: 'Deleted!',
              text: 'Employee has been deleted.',
              icon: 'success',
            });
          });
      }
    });
  }
  public selectedEmployee: any = {
    id: null,
    fistname: null,
    lastname: null,
    email: null,
    department_Id: null,
    role_Id: null,
  };
  updateEmp(employee: any) {
    this.selectedEmployee = employee;
    console.log(employee);
  }

  SubmitUpdate() {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log('okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
        Swal.fire('Saved!', '', 'success');

        this.http
          .put(
            'http://localhost:8080/emp-controller/update-emp',
            this.selectedEmployee
          )
          .subscribe((Response) => {});
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
}
