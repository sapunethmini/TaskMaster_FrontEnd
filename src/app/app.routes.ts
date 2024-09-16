import { Routes } from '@angular/router';
import { AddEmpComponent } from './page/add-emp/add-emp.component';
import { ViewAllEmployeeComponent } from './page/view-all-employee/view-all-employee.component';

export const routes: Routes = [
  {
    path: 'add-employee',
    component: AddEmpComponent,
  },
  {
    path: 'view-employee',
    component: ViewAllEmployeeComponent,
  },
];
