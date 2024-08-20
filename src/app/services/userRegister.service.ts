import { Injectable } from "@angular/core";
import { User } from "../models/User.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

interface ApiResponse {
    success: boolean;
    message: string;
    completionTimeStamp: string;
    result: User;
    errorDetails: any;
  }
@Injectable({
  providedIn: 'root'
})

export class UserRegister{
    private apiUrl= "http://localhost:8080/api/auth/register"
    constructor(private http: HttpClient) {}

    registerUser(user: User): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(this.apiUrl, user);
    }
}

