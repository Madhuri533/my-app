import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
 @Output() public exeInterval =new EventEmitter(); 
  public interval : any;
  public val= 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
     this.interval = setInterval(() =>{
       this.exeInterval.emit(this.val++);

     } , 1000);
  
  }

  onStopGame(){
    clearInterval(this.interval);
    console.log("interval stopped");

  }

}
