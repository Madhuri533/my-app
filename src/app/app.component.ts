import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  
  // onUpdatee(Item:any){
  //   this.inactiveUsers.push(Item);
  //   this.activeUsers.splice(this.activeUsers.findIndex((user) => user === Item) , 1);
  // }
  // updatingList(item:any){
  //   this.activeUsers.push(item);
  //   this.inactiveUsers.splice(this.inactiveUsers.findIndex((nam) => nam === item), 1);

  // }




  public disp: any;
  disp2: any;

  title = 'my-app';
  text = 'madhu';
  image = 'assets/img/cam.jpg';
  username = '';

  evenNumbers: any[] = [];
  oddNumbers: any[] = [];

  course = [];

  public crs = [
    { sno: 1, cnames: "angular course" },
    { sno: 2, cnames: "javascript course" },

  ];



  exec(numbr: any) {

    if (numbr % 2 == 0) {
      this.evenNumbers.push(numbr);
    }
    else {
      this.oddNumbers.push(numbr);
    }
  }


  public msg = '';

  styling() {
    return this.course.length > 0 ? 'green' : 'red';
  }

  color = "red";

  num = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' }
  ]

  oncl() {
    this.num.push({ id: 3, name: 'course3' });
  }

  onremove() {
    this.num.pop();
  }

  ondeleting(details: any) {
    let index = this.num.indexOf(details);
    this.num.splice(index, 1);

  }
  onupdate(details: any) {
    details.name = "UPDATED";

  }

  value = false;
  arr: number[] = [];
  onpress() {
    this.value = !this.value;
    this.arr.push(this.arr.length + 1);
  }




}
