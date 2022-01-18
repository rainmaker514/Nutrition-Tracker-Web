import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faDumbbell, faEnvelope, faHourglass, faLock, faRuler, faUser, faWeight } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { NotificationType } from 'src/app/enum/notification-type.enum';
import { CustomHttpResponse } from 'src/app/models/custom-http-response';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pages-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router, private notificationService: NotificationService, 
    private userService: UserService) { }

  user: User;
  public heightDropDown: string[] = [];
  faLock = faLock;
  faEnvelope = faEnvelope;
  faUser = faUser;
  faRuler = faRuler;
  faWeight = faWeight;
  faHourglass = faHourglass;
  faDumbbell = faDumbbell;
  faClipboard = faClipboard;
  private subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.user = this.authenticationService.getUserFromLocalCache();
    this.populateHeightArray();
  }

  onLogOut(): void{
    this.authenticationService.logout();
    this.router.navigateByUrl('/login');
    this.notificationService.notify(NotificationType.SUCCESS, "You've been logged out.");
  }

  onUpdateUser(user: User): void{

  }

  //generate array of heights for dropdown
  populateHeightArray(){
    var ft = 4;
        var inch = 0;

        for(let i = 0; i < 36; i++){

          if(ft == 7){
            break;
          }

          if(inch == 12){
            ft++;
            inch = 0;
          }

          this.heightDropDown.push(ft + "\'" + inch++ + '"');
        }
  }

  public onResetPassword(emailForm: NgForm): void{
    const email = emailForm.value[''];
    this.subscriptions.push(
      this.userService.resetPassword(email).subscribe(
        (response: CustomHttpResponse) => {
          this.notificationService.notify(NotificationType.SUCCESS, response.message);
        },
        (error: HttpErrorResponse) => {
          this.notificationService.notify(NotificationType.ERROR, error.error.message);
        },
        () => emailForm.reset()
      )
    );
  }
}
