export class Entry {
    id: number;
    date: Date
    weight: number;
  
    constructor(){
      this.weight = 0;
      this.date = new Date();
    }
  }
  