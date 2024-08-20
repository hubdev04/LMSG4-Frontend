
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Course {
  id: number;
  title: string;
  mentor: string;
  status: string;
}

@Component({
  selector: 'app-adme-dashboard',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './adme-dashboard.component.html',
  styleUrls: ['./adme-dashboard.component.css']
})
export class AdmeDashboardComponent {
  courses: Course[] = [
    { id: 1, title: 'Course Title 1', mentor: 'John Doe', status: 'Pending' },
    { id: 2, title: 'Course Title 2', mentor: 'Jane Smith', status: 'Accepted' },
    { id: 3, title: 'Course Title 3', mentor: 'Emily Johnson', status: 'Rejected' }
  ];

  acceptCourse(course: Course) {
    course.status = 'Accepted';
  }

  rejectCourse(course: Course) {
    course.status = 'Rejected';
  }

  deleteCourse(course: Course) {
    this.courses = this.courses.filter(c => c.id !== course.id);
  }
}
