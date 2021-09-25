import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit {
  name!: string;
  email!: string;
  message!: string;

  constructor() {


    }

  ngOnInit(): void {
  }

  submitForm(){
  const message = `My name is ${this.name}`;
  //alert('Message sent!');
  alert(message);

  //http or api call to send the data
  }
}
