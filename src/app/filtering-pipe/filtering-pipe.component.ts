import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtering-pipe',
  templateUrl: './filtering-pipe.component.html',
  styleUrls: ['./filtering-pipe.component.css']
})
export class FilteringPipeComponent implements OnInit {
  users=[
    {
      uname:'madhu',
      status:'active'
    },
  {
    uname:'san',
    status:'inactive'
  },
   {
     uname:'junnu',
     status:'active'

   }];

  constructor() { }

  ngOnInit(): void {
  }

}
