import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-pages-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  
  constructor(private router: Router, private authenticationService: AuthenticationService, private notificationService: NotificationService) { }
  
  email: string;
  password: string;

  ngOnInit(): void {
    if(this.authenticationService.isUserLoggedIn()){
      this.router.navigateByUrl('/user');
    }else{
      this.router.navigateByUrl('/login');
    }
  }

  ngOnDestroy(): void {
    
  }

  onLogin(loginForm: NgForm){

  }
}
