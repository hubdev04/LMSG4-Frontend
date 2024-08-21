// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/signUp/sign-up.component';
import { CardComponent } from './components/card/card.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LoginComponent, SignUpComponent, CardComponent,AdminDashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected from styleUrl to styleUrls
})

export class AppComponent {
  title = 'my-app';
}
