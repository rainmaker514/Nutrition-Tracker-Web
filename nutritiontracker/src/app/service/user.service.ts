import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {

  private host = environment.userUrl;

  constructor(private http: HttpClient) {}

 findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.host}/users/all`);
 }

 addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.host}/users/add`, user);
 }

 updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.host}/users/update`, user);
 }

 deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.host}/users/delete/${id}`);
 }


}
