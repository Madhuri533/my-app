import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  public firstObjObs:any;

  constructor() { }

  ngOnInit(): void {
   this.firstObjObs= interval(1000).subscribe( count => {
          console.log(count);
    });
  }
  ngOnDestroy(): void {
      this.firstObjObs.unsubscribe();
  }

}
