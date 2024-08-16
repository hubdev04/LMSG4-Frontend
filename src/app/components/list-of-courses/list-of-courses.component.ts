import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-list-of-courses',
  standalone: true,
  imports: [CommonModule,CourseCardComponent],
  templateUrl: './list-of-courses.component.html',
  styleUrl: './list-of-courses.component.css'
})
export class ListOfCoursesComponent {
  categories: string[] = ['Course 1', 'Course 2', 'Course 3'];
  courses: { id: number, name: string, description: string,mentor:string }[] = [
    { id: 1, name: 'Course 1', description: 'Description for Course 1',mentor:'mentor-1', },
    { id: 2, name: 'Course 2', description: 'Description for Course 2',mentor:'mentor-1', },
    { id: 3, name: 'Course 3', description: 'Description for Course 3',mentor:'mentor-1', }
  ];


  constructor() { }
}
