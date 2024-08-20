import { Component,Input } from '@angular/core';
import { Course } from '../../models/Course.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


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
  @Input() course!: Course;
}
