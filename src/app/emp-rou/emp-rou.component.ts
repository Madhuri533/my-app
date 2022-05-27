import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-emp-rou',
  templateUrl: './emp-rou.component.html',
  styleUrls: ['./emp-rou.component.css']
})
export class EmpRouComponent implements OnInit {
  public id: any;
  public ename: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params:Params) => {
      this.id=params['id'];
      this.ename=params['namee'];
    });
   }

  ngOnInit(): void {
  }

}
