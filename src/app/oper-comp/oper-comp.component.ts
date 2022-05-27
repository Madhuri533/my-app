import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter, from, fromEvent, map, Observable, of, pipe, tap } from 'rxjs';

@Component({
  selector: 'app-oper-comp',
  templateUrl: './oper-comp.component.html',
  styleUrls: ['./oper-comp.component.css']
})
export class OperCompComponent implements OnInit {
  @ViewChild('generate') public gen!:ElementRef;

  arr=['ram','sam','saam'];
  arrObj={
    id:12,
    name:'angular'
  }

  constructor() { }

  ngOnInit(): void {
    // show:observable<String[]> =of([this.arr]);
    // const show= of(this.arr);
    // // const show= of(this.arrObj);
    // // const show = of([1,2,3]);
    // show.subscribe((data)=>{
    //   console.log(data);
    // });

    // const dispEvent= fromEvent(document,'click');
    // dispEvent.subscribe(data=>{
    //   console.log(data);
    // })
    
    // const dispEvent2= fromEvent(this.gen.nativeElement, 'click');
    // dispEvent2.subscribe(data=>{
    //   console.log(data);
    // })

    const oper: Observable<number>= new Observable(observer=>{
      let count=0;
      setInterval(()=>{
        observer.next(count);
        count++
      },2000);
    })

    // oper.pipe(map((data: number) =>  data + 10))
    // oper.pipe(tap(data=>{
    //   console.log(data);
    // }))
    
  oper.pipe(filter(data=>data<5))
    .subscribe((data) => {
     console.log(data);
    });

  }

}
