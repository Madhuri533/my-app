import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-viewchldconc',
  templateUrl: './viewchldconc.component.html',
  styleUrls: ['./viewchldconc.component.css']
})
export class ViewchldconcComponent implements OnInit , AfterViewInit{
  @ViewChild('getting' , { static: true }) public getting!: ElementRef;

 @ViewChild('change' , { static: true }) public wchng!: ElementRef;
 @ViewChildren('vcn') public dvcn!:QueryList<ElementRef>;
 @ViewChild('childConc') public childConc!:ChildComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    console.log(this.wchng);
    this.wchng.nativeElement.style.color = "green";
    this.dvcn.first.nativeElement.style.color= "pink";
    this.dvcn.last.nativeElement.style.color= "blue";
    // this.dvcn._results[1].nativeElement.style.color= "red";

  }

  dis(){
    this.getting.nativeElement.value;

  }

  inc(){
    this.childConc.increment();

  }

  dec(){
    this.childConc.decrement();

  }

}
