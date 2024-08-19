import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule, CardModule, AvatarModule],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
    testimonials: { name: string, comments: string, position: string }[] = [
        { name: 'Course 1', comments: 'Description for Course 1', position: 'Backend-developer' },
        { name: 'Course 2', comments: 'Description for Course 2', position: 'Backend-developer' },
        { name: 'Course 3', comments: 'Description for Course 3', position: 'Backend-developer' },
        { name: 'Course 4', comments: 'Description for Course 3', position: 'Backend-developer' },
        { name: 'Course 5', comments: 'Description for Course 3', position: 'Backend-developer' },
        { name: 'Course 6', comments: 'Description for Course 3', position: 'Backend-developer' }
    ];
    constructor() { }
}
