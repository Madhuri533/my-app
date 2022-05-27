import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about-navigate',
  templateUrl: './about-navigate.component.html',
  styleUrls: ['./about-navigate.component.css']
})
export class AboutNavigateComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  toRedirect(){
    this.router.navigate(["/students-rou"],{queryParams:{allow:'3'},fragment:'loading'});

  }

}
