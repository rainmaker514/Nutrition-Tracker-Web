import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pages-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  public contacts: Contact[];

  ngOnInit(): void {
    //leave here for testing
    //this.getContacts();
  }

  //leave here for testing
  /*public getContacts(): void {
          this.contactService.findAll().subscribe(
            (response: Contact[]) => {
              this.contacts = response;
              console.log(this.contacts);
            },
            (error: HttpErrorResponse) => {
              alert(error.message);
            }
          );
        }*/

  onAddContact(addForm: NgForm): void{

    alert('Message sent!');

    this.contactService.addContact(addForm.value).subscribe(
          (response: Contact) => {
            console.log(response);
            this.getContacts();
            addForm.reset();
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
            addForm.reset();
          }
        );
  }
}
