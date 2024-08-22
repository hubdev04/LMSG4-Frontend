import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CourseService } from '../../../services/courses.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Course } from '../../../models/Course.model';
import { CourseCardComponent } from '../../course-card/course-card.component';
@Component({
  selector: 'app-mentor-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterModule,CommonModule,FormsModule,CourseCardComponent],
  templateUrl: './mentor-dashboard.component.html',
  styleUrl: './mentor-dashboard.component.css'
})
export class MentorDashboardComponent {
  token:any=localStorage.getItem('authorization')
  mentorInitials = 'JD'; // Example initials for "John Doe"
  //courses: any[] = []; // Adjust type as needed
  courses: Course[] = [
    // {
    //   title: 'Introduction to Angular',
    //   duration: 30, // Duration in hours
    //   category: 'Beginner',


    //   createdBy: 'Jane Doe',
    //   id: 0,
    //   approvalStatus: '',
    //   createdDate:new Date(),
    //   lastModifiedDate: new Date(),
    //   lastModifiedBy: '',
    //   isActive: '',
    //   isDeleted: ''
    // },
    // {
    //   title: 'Advanced TypeScript',
    //   duration: 20,
    //   category: 'Intermediate',


    //   createdBy: 'John Smith',
    //   id: 0,
    //   approvalStatus: '',
    //   createdDate:new Date(),
    //   lastModifiedDate: new Date(),
    //   lastModifiedBy: '',
    //   isActive: '',
    //   isDeleted: ''
    // },
    // {
    //   title: 'Full Stack Development',
    //   duration: 50,
    //   category: 'Advanced',


    //   createdBy: 'Emily Johnson',
    //   id: 0,
    //   approvalStatus: '',
    //   createdDate:new Date(),
    //   lastModifiedDate: new Date(),
    //   lastModifiedBy: '',
    //   isActive: '',
    //   isDeleted: ''
    // },
    // {
    //   title: 'React Basics',
    //   duration: 25,
    //   category: 'Beginner',


    //   createdBy: 'Michael Brown',
    //   id: 0,
    //   approvalStatus: '',
    //   createdDate:new Date(),
    //   lastModifiedDate: new Date(),
    //   lastModifiedBy: '',
    //   isActive: '',
    //   isDeleted: ''
    // },
    // {
    //   title: 'Node.js for Backend',
    //   duration: 35,
    //   category: 'Intermediate',

    //   createdBy: 'Sarah Wilson',
    //   id: 0,
    //   approvalStatus: '',
    //   createdDate:new Date(),
    //   lastModifiedDate: new Date(),
    //   lastModifiedBy: '',
    //   isActive: '',
    //   isDeleted: ''
    // }
  ];
  constructor(private courseService: CourseService) {}

  // ngOnInit(): void {
  //   const mentorName = 'John Doe'; // Replace this with actual mentor's name
  //   this.mentorInitials = this.getInitials(mentorName);
  //   this.loadCourses();
  // }

  // loadCourses(): void {
  //   this.courseMentorService.getCourses().subscribe(
  //     (data) => {
  //       this.courses = data;
  //     },
  //     (error) => {
  //       console.error('Error loading courses', error);
  //     }
  //   );
  // }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }

  // logout(): void {
  //   // Implement your logout logic here
  //   alert('Logged out');
  //}
}
