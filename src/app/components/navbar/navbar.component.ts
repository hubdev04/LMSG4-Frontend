import { Component } from '@angular/core';
import { AdminDashboardComponent } from '../../pages/admin-dashboard/admin-dashboard.component';
import { SignUpComponent } from '../signUp/sign-up.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AdminDashboardComponent,SignUpComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
