import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs/internal/Observable';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()
export class UserService {

  private host = environment.userUrl;

  constructor(private http: HttpClient) {}

 findAll(): Observable<User[] | HttpErrorResponse> {
    return this.http.get<User[]>(`${this.host}/users/all`);
 }

 addUser(formData: FormData): Observable<User> {
    return this.http.post<User>(`${this.host}/users/add`, formData);
 }

 updateUser(formData: FormData): Observable<User> {
    return this.http.put<User>(`${this.host}/users/update`, formData);
 }

 resetPassword(email: string): Observable<any | HttpErrorResponse> {
   return this.http.get(`${this.host}/users/reset-password/${email}`);
 }

 deleteUser(id: number): Observable<void | HttpErrorResponse> {
    return this.http.delete<void>(`${this.host}/users/delete/${id}`);
 }

 addUsersToLocalCache(users: User[]): void {
   localStorage.setItem('users', JSON.stringify(users));
}
}
