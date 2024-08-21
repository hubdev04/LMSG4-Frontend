import { Component, Input } from '@angular/core';
import { AdminDashboardComponent } from '../../pages/admin-dashboard/admin-dashboard.component';
import { SignUpComponent } from '../signUp/sign-up.component';
import { RouterModule,RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AdminDashboardComponent,SignUpComponent,RouterModule,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // token:any=localStorage.getItem('authorization');
  @Input() token!:any;
 
}

