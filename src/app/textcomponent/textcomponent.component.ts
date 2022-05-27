import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-textcomponent',
  templateUrl:'./textcomponent.component.html',
  styleUrls:['./textcomponent.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class TextcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
