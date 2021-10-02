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

  heightDropDown: string[]=[];
  constructor() {

  }

  ngOnInit(): void {
    this.populateHeightArray();
  }

  submitForm(){}

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
