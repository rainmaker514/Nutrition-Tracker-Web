import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private host = environment.userUrl;

  constructor(private http: HttpClient) { }

  login(user: User): Observable<HttpResponse<any> | HttpErrorResponse> {
    return this.http.post<HttpResponse<any> | HttpErrorResponse>(`${this.host}/users/login`, user, {observe: 'response'});
  }

  register(user: User): Observable<User | HttpErrorResponse> {
      return this.http.post<User | HttpErrorResponse>(`${this.host}/users/signup`, user);
  }

  logout(): void {
        this.token = null;
    }
}
