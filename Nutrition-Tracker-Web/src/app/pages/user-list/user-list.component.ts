import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
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
  private subscriptions: Subscription[] = [];
  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;

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
            this.notificationService.notify(NotificationType.SUCCESS, `${response.length} user(s) found.`)
          }
        },
        (errorResponse: HttpErrorResponse) =>{
          this.notificationService.notify(NotificationType.ERROR, errorResponse.error.message);
        }
      )
    );
  }

  //modal event listeners
  onEditUserButtonClick(): void{
    const editUserModal = document.querySelector('#editUserModal');
    const modalBg = document.querySelector('.modal-background');
    const cancelButton = document.querySelector('#cancel');
    const closeButton = document.querySelector('#close');
    const saveButton = document.querySelector('#save');

    editUserModal.classList.add('is-active');

    cancelButton.addEventListener('click', () => {
      editUserModal.classList.remove('is-active');
    });

    closeButton.addEventListener('click', () => {
      editUserModal.classList.remove('is-active');
    });

    modalBg.addEventListener('click', () => {
      editUserModal.classList.remove('is-active');
    });

    saveButton.addEventListener('click', () => {
      //TODO: make function to update user
      editUserModal.classList.remove('is-active');
    });
  }
}
