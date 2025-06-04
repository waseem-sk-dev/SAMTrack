import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8091';

  constructor(private http: HttpClient) {}

  getAllUsers(
    page: number,
    size: number,
    role?: string,
    search?: string
  ): Observable<any> {
    let url = `${this.apiUrl}/user/get-all-user?page=${page}&size=${size}`;
    if (role && role !== 'All') url += `&role=${role}`;
    if (search) url += `&search=${search}`;
    return this.http.get<any>(url);
  }

  deleteUser(username: string): Observable<string> {
    return this.http.delete(`${this.apiUrl}/user/delete-user-by-username`, {
      responseType: 'text' as const,
      params: { username },
    });
  }

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(
      `${this.apiUrl}/user/get-user-by-username/${username}`
    );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/user/update-user`, user);
  }
}
