import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pages-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstname!: string;
  lastname!: string;
  email!: string;
  password!: string;
  height!: string;
  weight!: number;
  minDate!: Date;
  maxDate!: Date;
  birthdate!: Date;
  activityLevel!: string;
  heightDropDown: string[]=[];

  constructor() {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();
        this.minDate = new Date(currentYear - 100, 1, 1);
        this.maxDate = new Date(currentYear, currentMonth, currentDate);
  }

  ngOnInit(): void {
    this.populateHeightArray();
  }

  submitForm(){}

  /*getTodaysDate(){
    var n =  new Date();
    var y = n.getFullYear();
    var m = n.getMonth() + 1;
    var d = n.getDate();
    this.today = y + "-" + m + "-" + d;
    console.log(this.today);



  }*/

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
