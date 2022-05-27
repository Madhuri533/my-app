import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assg-form',
  templateUrl: './assg-form.component.html',
  styleUrls: ['./assg-form.component.css']
})
export class AssgFormComponent implements OnInit {
  @ViewChild("f") formDone!: NgForm;
  defaultvalue="advanced";

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.formDone.value);
  }

}
