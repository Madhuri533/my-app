import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input() public evenNum: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.evenNum + "- even");
    
  }


}
