import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { NotificationType } from 'src/app/enum/notification-type.enum';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-pages-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router, private notificationService: NotificationService) { }

  faLock = faLock;
  faEnvelope = faEnvelope;

  ngOnInit(): void {
  }

  onLogOut(): void{
    this.authenticationService.logout();
    this.router.navigateByUrl('/login');
    this.notificationService.notify(NotificationType.SUCCESS, "You've been logged out.");
  }

  onUpdateUser(user: User): void{

  }
}
