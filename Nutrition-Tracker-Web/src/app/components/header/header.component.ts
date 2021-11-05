import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(){
    const navbarMenu = document.querySelector('#nav-links');


    navbarMenu.classList.toggle('is-active');

  }
}
