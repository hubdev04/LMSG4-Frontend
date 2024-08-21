import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/courses.service';
import { RouterModule } from '@angular/router';

interface Course {
isDeleted: any;
approvalStatus: any;
  id: number;
  title: string;
  mentor: string;
  status: string;
  isDelete : boolean;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports:[CommonModule,RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
 
  constructor(private service: CourseService) { }

  courses: Course[] = [];
  ngOnInit(): void{
    this.service.getAllCourses().subscribe({
      next: (response) =>{
     // console.log("hello",response.result);
     
      this.courses= response;
    }, error:(err) =>{
      console.log(console.log(err));
      ;
    }});
  }


  //   { id: 1, title: 'Course Title 1', mentor: 'John Doe', status: 'Pending' },
  //   { id: 2, title: 'Course Title 2', mentor: 'Jane Smith', status: 'Pending' },
  //   { id: 3, title: 'Course Title 3', mentor: 'Emily Johnson', status: 'Pending' },
  //   { id: 4, title: 'Course Title 1', mentor: 'John Doe', status: 'Pending' },
  //   { id: 5, title: 'Course Title 2', mentor: 'Jane Smith', status: 'Pending' },
  //   { id: 6, title: 'Course Title 3', mentor: 'Emily Johnson', status: 'Pending' }
  
  adminId : Number=2

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  acceptCourse(course: Course) {
   course.status = 'APPROVED';
    //api call => course
    var change = [{adminId : this.adminId, courseId: course.id,status : course.status}]
    this.service.changeStatus(change).subscribe({
      next:(response) => {
        console.log(response);

        this.courses=  this.courses.map((course) => {
            if(course.id === response.result[0].id)
             return response.result[0]
            else
             return course;
            })
        // course.approvalStatus = 'Accepted';
      },
      error:(err) => 
      {
        console.error('Error updating course status:', err);
      }
  });

  }


  rejectCourse(course: Course) {
    course.status = 'DENIED';
    var change = [{adminId : this.adminId, courseId: course.id,status : course.status}]
    this.service.changeStatus(change).subscribe(
      (res:any) => {
        
        this.courses = this.courses.map( (course) => 
        {
          if(course.id === res.result[0].id)
            return res.result[0];
          else
          return course;
        })
      },
      (error) =>
      {
        console.error('Error updating course status:', error);
      }
    );
  }

  deleteCourse(course:Course) {
    var change = [course.id]
    this.service.delCourse(change).subscribe(
      (res:any)=>
      {   
        console.log(res);
        this.courses = this.courses.map((course) => {
        if(course.id === res.result[0].id)
          return res.result[0];
        else
         return course;
       })
       },
      (error)=>
      {
        console.error('Error deleting the course:', error);
      }
    );
    //this.courses = this.courses.filter(c => c.id !== course.id);
  }
}

