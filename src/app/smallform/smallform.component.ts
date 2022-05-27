import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-smallform',
  templateUrl: './smallform.component.html',
  styleUrls: ['./smallform.component.css']
})
export class SmallformComponent implements OnInit {
  @ViewChild('dName', {static:true}) public dName!: ElementRef;
   @ViewChild('dLocation', {static:true}) public dLocation!:ElementRef;
  @Output() public detInfo = new EventEmitter();
  @Output() public detInfo2 = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onPress(){
   const detail= this.dName.nativeElement.value;
   const detail2= this.dLocation.nativeElement.value;
   this.detInfo.emit(detail);
   this.detInfo2.emit(detail2);
    
  }
 

}
