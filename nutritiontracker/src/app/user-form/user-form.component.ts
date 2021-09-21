import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent{

  user: User;


  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private userService: UserService) {

    this.user = new User("","","","",0,0,0,"");
  }

  onSubmit(data: any) {
    this.user = new User(data.id, data.name, data.userName, data.password, data.height, data.weight, data.age, data.activityLevel);
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
