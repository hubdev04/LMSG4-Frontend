
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/courses.service';

interface Course {
  id: number;
  title: string;
  mentor: string;
  status: string;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(private service: CourseService) { }
  
  courses: Course[] = [
    { id: 1, title: 'Course Title 1', mentor: 'John Doe', status: 'Pending' },
    { id: 2, title: 'Course Title 2', mentor: 'Jane Smith', status: 'Accepted' },
    { id: 3, title: 'Course Title 3', mentor: 'Emily Johnson', status: 'Rejected' }
  ];
  adminId : Number=2
  acceptCourse(course: Course) {
    course.status = 'Accepted';
    //api call => course
    var change = [{adminId : this.adminId, courseId: course.id,status : course.status}]
    this.service.changeStatus(change);

  }


  rejectCourse(course: Course) {
    course.status = 'Rejected';
    var change = [{adminId : this.adminId, courseId: course.id,status : course.status}]
    this.service.changeStatus(change);
  }

  deleteCourse(course: Course) {
    this.service.delCourse(course);
    //this.courses = this.courses.filter(c => c.id !== course.id);
  }
}

