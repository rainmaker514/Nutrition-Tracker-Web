import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authenticationService: AuthenticationService) { }
  
  isLoggedIn = false;
  faUserCircle = faUserCircle;

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if(event.constructor.name === "NavigationEnd"){
        this.isLoggedIn = this.authenticationService.isUserLoggedIn();
      }
    })
  }
  
  onClick(){
    const navbarMenu = document.querySelector('#nav-links');
    navbarMenu.classList.toggle('is-active');
  }

  onDropDown(){
    const dropDown = document.querySelector('#dropDown');
    dropDown.classList.toggle('is-active');
  }
}
