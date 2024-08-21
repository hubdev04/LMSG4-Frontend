import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";
import { Course } from "../models/Course.model";

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

export class CourseService {
    
  private apiUrl = 'http://localhost:8082/courses/';
  private api='http://localhost:8082/courses';
  private apiDel ="http://localhost:8082/courses/delete";
  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<any> {
    console.log("get course");

    // return this.http.get(this.apiUrl)
    console.log("get course");
    return this.http.get<ApiResponse>(`${this.apiUrl}`).pipe(
        
    
        map((response: ApiResponse) => {
          console.log('API Response:', response); // Debugging
          if (response.success) {
            console.log(response.result);
            return response.result; // Return the array of courses
          } else {
            console.log(response.message);
            
            throw new Error(response.message);
          }
        }),
        catchError(this.handleError)
      ); 
  }
  
  changeStatus(change: any): Observable<any> {
    return this.http.put<ApiResponse>(`${this.api}`,change);
  }

  delCourse(change: any): Observable<any> {
    return this.http.put<ApiResponse>(`${this.apiDel}`,change);
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
