import { Injectable } from "@angular/core";
import { User } from "../models/User.model";

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
    private apiUrl= "http://localhost:8081/api/auth/register"
}

