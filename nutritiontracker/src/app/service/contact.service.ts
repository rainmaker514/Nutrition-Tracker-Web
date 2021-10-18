import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../model/contact';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactUrl = environment.contactUrl;

  constructor(private http: HttpClient) { }

  //leave here for testing
  //public findAll(): Observable<Contact[]> { return this.http.get<Contact[]>(`${this.contactUrl}/contact/all`); }

  public addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.contactUrl}/contact/add`, contact);
    }
}
