import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { NotificationType } from '../enum/notification-type.enum';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  constructor(private notifier: NotifierService) { }

   notify(type: NotificationType, message: string){
     this.notifier.notify(type, message);
   }
//combine methods
   sendNotification(notificationType: NotificationType, message: string): void {
    if(message){
      this.notify(notificationType, message);
    }else{
      this.notify(notificationType, 'AN ERROR OCCURED. PLEASE TRY AGAIN.');
    }
  }
}
