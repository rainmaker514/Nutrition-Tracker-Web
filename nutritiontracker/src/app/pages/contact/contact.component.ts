import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor() {


    }

  ngOnInit(): void {
  }

  submitForm(){

  alert('Message sent!');


  //http or api call to send the data
  }
}
