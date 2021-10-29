import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private host = environment.userUrl;
  private token: string;
  private loggedInEmail: string;

  constructor(private http: HttpClient) { }

  login(user: User): Observable<HttpResponse<any> | HttpErrorResponse> {
    return this.http.post<HttpResponse<any> | HttpErrorResponse>(`${this.host}/users/login`, user, {observe: 'response'});
  }

  register(user: User): Observable<User | HttpErrorResponse> {
      return this.http.post<User | HttpErrorResponse>(`${this.host}/users/signup`, user);
  }

  logout(): void {
        this.token = null;
        this.loggedInEmail = null;
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('users');
    }

    saveToken(token: string): void {
      this.token = token;
      localStorage.setItem('token', token);
    }

    addUserToLocalCache(user: User): void {
      localStorage.setItem('user', JSON.stringify(user));
    }

    getUserFromLocalCache(): User {
      return JSON.parse(localStorage.getItem('user'));
    }

}
