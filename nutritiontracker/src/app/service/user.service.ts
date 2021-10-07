import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {

  private usersUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.usersUrl}/all`);
  }

  public addUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(`${this.usersUrl}/adduser`, user);
  }

  public updateUser(user: User): Observable<User[]> {
    return this.http.put<User[]>(`${this.usersUrl}/update`, user);
  }

  public deleteUser(email: string): Observable<void> {
      return this.http.delete<void>(`${this.usersUrl}/delete/${email}`);
    }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
}
