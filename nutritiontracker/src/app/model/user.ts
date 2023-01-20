export class User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  height: string;
  weight: number;
  age: number;
  activityLevel: string;
  goal: string;
  role: string;
  authorities: [];

  constructor(){
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.height = '';
    this.weight = 0;
    this.age = 0;
    this.activityLevel = '';
    this.goal = '';
    this.role = '';
    this.authorities = [];
  }
}
