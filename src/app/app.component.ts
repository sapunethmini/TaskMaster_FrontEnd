import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MangEmpComponent } from './page/mang-emp/mang-emp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MangEmpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TaskMaster';
}
