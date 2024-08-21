import { Injectable } from "@angular/core";
import { User } from "../models/User.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { UserLogin } from "../models/UserLogin.model";

interface ApiResponse {
    success: boolean;
    message: string;
    completionTimeStamp: string;
    result: UserLogin;
    errorDetails: any;
  }
@Injectable({
  providedIn: 'root'
})

export class UserLogging{
    private apiUrl= "http://localhost:8081/api/auth/login"
    constructor(private http: HttpClient) {}

    loginUser(user: UserLogin): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(this.apiUrl, user);
    }
}

