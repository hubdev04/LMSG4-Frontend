import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { Course } from '../../models/Course.model';
import { CourseService } from '../../services/courses.service';


@Component({
  selector: 'app-list-of-courses',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './list-of-courses.component.html',
  styleUrls: ['./list-of-courses.component.css'] // Fixed the typo here
})
export class ListOfCoursesComponent implements OnInit {
  categories: string[] = ['Category 1', 'Category 2', 'Category 3'];
  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses(): void {
    this.courseService.getAllCourses().subscribe({
      next: (data: Course[]) => {
        this.courses = data; // Assign the array of courses to the component property
        console.log('Courses fetched:', data); // Debugging
      },
      error: (error) => {
        console.error('Error fetching courses:', error);
      }
    });
  }
}
