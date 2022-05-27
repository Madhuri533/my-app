import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mytext',
  templateUrl: './mytext.component.html',
  styleUrls: ['./mytext.component.css']
})
export class MytextComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.data);

    
  }

}
