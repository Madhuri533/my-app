import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-un-saved-search',
  templateUrl: './un-saved-search.component.html',
  styleUrls: ['./un-saved-search.component.css']
})
export class UnSavedSearchComponent implements OnInit {
  isDirty=true;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  Onsbm(){
    this.route.navigate(['/textcomponent']);
  }


}
