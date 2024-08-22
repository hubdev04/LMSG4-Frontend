import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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
  @Input() token!:any;
  categories: string[] = ['Front-End Development', 'Back-End Development', 'Game Development','App Development'];
  courses: Course[] = [];
  filteredCourses:Course[]=[];
  selectedCategory: string | null = null;

  selectCategory(category: string): void {
    console.log(this.courses)
    this.selectedCategory = category;
   
      if(this.selectedCategory ){
        this.filteredCourses = this.courses.filter((course) => course.category.toLowerCase() === this.selectedCategory?.toLowerCase());
      }
      else{
        
      }
    
    // Optionally, you can also filter courses based on the selected category here
  }
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses(): void {
    this.courseService.getAllCourses().subscribe({
      next: (data: Course[]) => {
        this.courses = data;
        this.filteredCourses=data;  // Assign the array of courses to the component property
        console.log('Courses fetched:', data); // Debugging
      },
      error: (error) => {
        console.error('Error fetching courses:', error);
      }
    });
  }
}
