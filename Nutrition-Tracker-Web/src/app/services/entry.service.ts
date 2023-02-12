import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs/internal/Observable';
import { JwtHelperService } from "@auth0/angular-jwt";
import { CustomHttpResponse } from '../models/custom-http-response';
import { NgForm } from '@angular/forms';
import { Entry } from '../models/entry';


@Injectable()
export class EntryService {

  private host = environment.entryUrl;

  constructor(private http: HttpClient) {}

 findAllEntriesByUserId(userId: number): Observable<Entry[] | HttpErrorResponse> {
    return this.http.get<Entry[]>(`${this.host}/entries/${userId}`);
 }

 addEntry(formData: FormData): Observable<Entry> {
    return this.http.post<Entry>(`${this.host}/entries/add`, formData);
 }

 
}
