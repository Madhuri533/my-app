
import { Component, OnDestroy, OnInit } from '@angular/core';

import { count, Observable, Observer, Subscription} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {
  public firstCustomObs!: Subscription;
  constructor() { }

  ngOnInit(): void {
    const customObs= new Observable((observer:Observer<number>)=> {
      let count=0;
      setInterval( () => {
        observer.next(count);
        if(count>4)
        observer.complete();
        count++;
      },1000);
    });
    this.firstCustomObs=customObs.subscribe((data: any)=> {
       console.log(data);
    });
  }
  ngOnDestroy(): void {
      this.firstCustomObs.unsubscribe();
  }

}
