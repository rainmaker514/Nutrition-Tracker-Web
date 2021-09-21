export class User {

id: string;
  name: string;
  userName: string;
  password: string;
  height: number;
  weight: number;
  age: number;
  activityLevel: string;

  constructor(id:string, name: string, userName: string, password: string, height: number, weight: number, age: number,
  activityLevel: string)
  {
    this.id = id;
    this.name = name;
    this.userName = userName;
    this.password = password;
    this.height = height;
    this.weight = weight;
    this.age = age;
    this.activityLevel = activityLevel;
  }
}
