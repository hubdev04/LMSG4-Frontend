import { Component,Input } from '@angular/core';
import { Course } from '../../models/Course.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [ MatCardModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})

export class CourseCardComponent {
  constructor(private router:Router){}
  @Input() token!:any;
  @Input() course!: Course;
  imageLinks:any={
    'frontEndDevelopment':'https://github.com/hubdev04/candidateApplicationPlatform/blob/main/src/images/webd.jpg?raw=true',
      'backEndDevelopment':'https://github.com/hubdev04/candidateApplicationPlatform/blob/main/src/images/backendDevelopment.jpg?raw=true'
  }
 
  onSubmit(token:any){
      if(!token){
        this.router.navigate(['/signup'])
      }
      else{
        this.router.navigate(['/course/{Id}'])
      }
  }
}
