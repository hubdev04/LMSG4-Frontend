import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Course } from '../../models/Course.model';
 // Update the path according to your project structure

interface ApiResponse {
  success: boolean;
  message: string;
  completionTimeStamp: string;
  result: Course[];
  errorDetails: any;
}

@Injectable({
  providedIn: 'root'
})
export class AddCourseService {
  private apiUrl = 'http://localhost:8082/courses/'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  // Method to add a new course
  addCourse(course: Course): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.apiUrl, [course])
      .pipe(
        catchError(this.handleError<ApiResponse>('addCourse'))
      );
  }

  // addC(course: Course): Observable<any>{
  //   return this.http.post(this.apiUrl, [course]);
  // }

  // Handle errors
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
