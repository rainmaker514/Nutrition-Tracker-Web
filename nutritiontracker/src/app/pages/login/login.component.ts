import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }
  email!: string;
  password!: string;

  ngOnInit(): void {
  }

  submitForm(){

  }
}
