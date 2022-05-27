import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input('parentName') public names:any;
  @Output() public childName = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSending(){
    this.childName.emit('hey recieved message');
  }

}
