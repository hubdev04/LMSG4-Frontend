import { Component, OnInit } from '@angular/core';
import { AddCourseService } from '../../../services/add-course.service/add-course.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../../..//models/Course.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './add-course-form.component.html',
  styleUrls: ['./add-course-form.component.css']
})
export class AddCourseFormComponent  {
  
    title:string =''
    category:string=''
    duration:number=1
    description:string=''
   // Use definite assignment assertion
  categories = ['Front-End Development', 'Back-End Development', 'App Development','Game Development'];

  constructor( private addCourseService: AddCourseService,private router: Router ) { }

 

  onSubmit(form:NgForm) {
    console.log(form.value)
    if (form.valid) {
      
      const course: Course = {
        title: this.title,
        id: 0,
        category: this.category,
        createdBy: '',
        duration: this.duration,
        approvalStatus: 'PENDING',
        description: this.description,
        createdDate: new Date(),
        lastModifiedDate: new Date(),
        lastModifiedBy: '',
        isActive: '',
        isDeleted: '',
        role: 'MENTOR'
      };
      this.addCourseService.addCourse(course).subscribe({
        next: (response) => {
          if (response.success) {
            console.log('Course added successfully', response);
            alert('Course added successfully');
            this.resetForm();
            this.router.navigate(['/mentor-dashboard']);
          } else {
            console.error('Failed to add course:', response.message);
          }
        },
        error: (err) => console.error('Error:', err)
      });

      // this.addCourseService.addC(course).subscribe((response: any) => {
      //   console.log(response);
        
      // }, (error: any) => {
      //   console.log("Error: "+error);
        
      // })
    }
  }

  resetForm(): void {
    this.title='';
    this.duration=1;
    this.category='';
    this.description='';
  }
}
