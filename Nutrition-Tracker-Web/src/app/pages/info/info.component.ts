import { Component, OnInit } from '@angular/core';
import { faHamburger, faStickyNote, faTasks } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  faTasks = faTasks;
  faHamburger = faHamburger;
  faStickyNote = faStickyNote;
  tabId = "my-progress";
  tabArray: string[] = ["my-progress", "my-food", "my-notes"];

  ngOnInit(): void {
  }

  onTabChange(id: any): void{
    document.getElementById(id).classList.add("is-active");

    this.tabArray.forEach((value,index)=>{
      if(value==id) this.tabArray.splice(index,1);
    });

    this.tabArray.forEach(tab => {
      document.getElementById(tab).classList.remove("is-active");
    });

    this.tabArray.push(id);
    this.tabId = id;
  }



  
}


