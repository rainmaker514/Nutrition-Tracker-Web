import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faClipboard, faDumbbell, faEdit, faEnvelope, faHourglass, faPlus, faRuler, faShieldAlt, faTrash, faUser, faWeight } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { NotificationType } from 'src/app/enum/notification-type.enum';
import { User } from 'src/app/models/user';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pages-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService, private notificationService: NotificationService) { }

  users: User[];
  user: User;
  selectedUser: User;
  addUser: User;
  editUser: User = new User();
  public heightDropDown: string[] = [];
  private subscriptions: Subscription[] = [];
  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;
  faUser = faUser;
  faClipboard = faClipboard;
  faDumbbell = faDumbbell;
  faHourglass = faHourglass;
  faWeight = faWeight;
  faRuler = faRuler;
  faEnvelope = faEnvelope;
  faShield = faShieldAlt;

  ngOnInit(): void {
    this.getUsers(true);
  }

  getUsers(showNotification: boolean): void {
    this.subscriptions.push(
      this.userService.findAll().subscribe(
        (response: User[]) => {
          this.userService.addUsersToLocalCache(response);
          this.users = response;
          if(showNotification){
            this.notificationService.notify(NotificationType.SUCCESS, `${response.length} user(s) found.`);
          }
        },
        (errorResponse: HttpErrorResponse) =>{
          this.notificationService.notify(NotificationType.ERROR, errorResponse.error.message);
        }
      )
    );
  }

  onSelectUser(selectedUser: User): void{
    this.selectedUser = selectedUser;
    const view = document.getElementById('viewUserModal');
    view.classList.toggle('is-active');
  }
  
  onEditUser(editUser: User): void{
    this.editUser = editUser;
    document.getElementById('editUserModal').classList.toggle('is-active');
  }  

  onUpdateUser(): void{
    document.getElementById('editUserModal').classList.toggle('is-active');
  }  

  onAddUser(addUser: User): void{

  }
}
