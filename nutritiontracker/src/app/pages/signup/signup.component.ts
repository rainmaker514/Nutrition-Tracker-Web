import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pages-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public users: User[];
  public heightDropDown: string[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.populateHeightArray();
    //this.getUsers();
  }

  /*public getUsers(): void {
        this.userService.findAll().subscribe(
          (response: User[]) => {
            this.users = response;
            console.log(this.users);
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
      }*/

  onAddUser(addForm: NgForm): void {
    alert("Form sent!");

    //add functionality that navigates user from sign up page
    this.userService.addUser(addForm.value).subscribe(
      (response: User) => {
        console.log(response);
        //this.getUsers();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
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

          this.heightDropDown.push(ft + "\'" + inch++ + "\"");
        }
  }
}
