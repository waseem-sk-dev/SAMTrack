// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface User {
  username: string;
  password: string;
  email?: string;
  role?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8091/user';

  constructor(private http: HttpClient) {}

  loginUser(request: LoginRequest): Observable<User | null> {
    return this.http.post<User | null>(`${this.baseUrl}/login-user`, request);
  }

  logout(): void {
    localStorage.removeItem('loggedInUser');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('loggedInUser');
  }

  getLoggedInUser(): User | null {
    const user = localStorage.getItem('loggedInUser');
    return user ? JSON.parse(user) : null;
  }
}
