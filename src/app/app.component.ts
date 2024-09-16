import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmpComponent } from './page/add-emp/add-emp.component';
import { ViewAllEmployeeComponent } from './page/view-all-employee/view-all-employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddEmpComponent,ViewAllEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TaskMaster';
}
