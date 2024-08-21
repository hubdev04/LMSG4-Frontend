import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HomePageCardComponent } from '../../components/home-page-card/home-page-card.component';
import { ListOfCoursesComponent } from '../../components/list-of-courses/list-of-courses.component';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent,HomePageCardComponent,ListOfCoursesComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  token:any=localStorage.getItem('authorization');
  
}
