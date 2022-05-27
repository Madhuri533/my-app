import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() public oddNum: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.oddNum + "- odd");
  }

}
