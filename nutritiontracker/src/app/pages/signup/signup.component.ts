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
  public editUser: User;
  public deleteUser: User;

  public minDate: Date;
  public maxDate: Date;
  public birthdate: Date;
  public age: number;

  public heightDropDown: string[]=[];


  constructor(private userService: UserService) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();
        this.minDate = new Date(currentYear - 100, 1, 1);
        this.maxDate = new Date(currentYear, currentMonth, currentDate);
  }

  ngOnInit(): void {
    this.populateHeightArray();
    this.getUsers();
  }



  //subtract birthdate from current date, if current month and day is greater than birth month and day, age++
  calculateAge(){
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();
    const birthYear = this.birthdate.getFullYear();
    const birthMonth = this.birthdate.getMonth();
    const birthDate = this.birthdate.getDate();

    this.age = currentYear as number - birthYear as number;

    //checking to see if birthday passed, if so add one to age
    if(currentMonth >= birthMonth && currentDate >= birthDate){
      this.age++;
    }
  }

  public getUsers(): void {
        this.userService.findAll().subscribe(
          (response: User[]) => {
            this.users = response;
            console.log(this.users);
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
      }

  onAddUser(addForm: NgForm): void {
    this.calculateAge();

    alert("Form sent!");
    //add functionality that navigates user from sign up page
    //document.getElementById('add-user-form').click();
    this.userService.addUser(addForm.value).subscribe(
      (response: User) => {
        console.log(response);
        this.getUsers();
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
          console.log("done");
            break;
          }

          if(inch == 12){
            ft++;
            inch = 0;


          }

          this.heightDropDown.push(ft + "\'" + inch++ + "\"");
          //console.log(this.heightDropDown);

        }
  }
}
