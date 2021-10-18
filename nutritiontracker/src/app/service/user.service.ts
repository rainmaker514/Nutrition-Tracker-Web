import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {

  private usersUrl = environment.baseUrl;

  constructor(private http: HttpClient) {

  }

  public findAll(): Observable<User[]> { return this.http.get<User[]>(`${this.usersUrl}/users/all`); }

  public addUser(user: User): Observable<User> { return this.http.post<User>(`${this.usersUrl}/users/add`, user); }

  public updateUser(user: User): Observable<User> { return this.http.put<User>(`${this.usersUrl}/users/update`, user); }

  public deleteUser(id: number): Observable<void> { return this.http.delete<void>(`${this.usersUrl}/users/delete/${id}`); }


}
