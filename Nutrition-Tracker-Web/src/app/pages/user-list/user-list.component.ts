import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  private currentEmail: string;
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

  constructor(private userService: UserService, private notificationService: NotificationService) { }

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
    this.currentEmail = editUser.email;
    document.getElementById('editUserModal').classList.toggle('is-active');
  }  

  onUpdateUser(): void{
    const formData = this.userService.createUserFormData(this.currentEmail, this.editUser);
    this.subscriptions.push(
      this.userService.updateUser(formData).subscribe(
        (response: User) => {
          document.getElementById('editUserModal').classList.toggle('is-active');
          this.getUsers(false);
          
          this.notificationService.notify(NotificationType.SUCCESS, `${response.firstname} ${response.lastname} was updated successfully.`);
        },
        (errorResponse: HttpErrorResponse) =>{
          this.notificationService.notify(NotificationType.ERROR, errorResponse.error.message);
          console.log(errorResponse);
        }
      )
    );
  }  

  onAddUser(addUserForm: NgForm): void{
    const formData = this.userService.createUserFormData(null, addUserForm.value);
    this.subscriptions.push(
      this.userService.addUser(formData).subscribe(
        (response: User) => {
          document.getElementById('addUserClose').click();
          this.getUsers(false);
          addUserForm.reset();
          this.notificationService.notify(NotificationType.SUCCESS, `${response.firstname} ${response.lastname} was added successfully.`);
        },
        (errorResponse: HttpErrorResponse) =>{
          this.notificationService.notify(NotificationType.ERROR, errorResponse.error.message);
          console.log(errorResponse);
        }
      )
    );
  }

  saveNewUser(): void{
    document.getElementById('addUserSave').click();
  }

  searchUsers(searchTerm: string): void{
    const results: User[] = [];
    for(const user of this.userService.getUsersFromLocalCache()){
      if(user.firstname.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
      user.lastname.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
      user.email.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1){
        results.push(user);
      }
    }
    this.users = results;
    if(results.length === 0 || !searchTerm){
      this.users = this.userService.getUsersFromLocalCache();
    }
  }
}
