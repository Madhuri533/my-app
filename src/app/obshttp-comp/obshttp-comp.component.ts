import { Component, OnInit } from '@angular/core';

import { ObsServiceService } from '../obs-service.service';

@Component({
  selector: 'app-obshttp-comp',
  templateUrl: './obshttp-comp.component.html',
  styleUrls: ['./obshttp-comp.component.css']
})
export class ObshttpCompComponent implements OnInit {

  details:any;
  toDetails:any;

  constructor(private obsServiceService:ObsServiceService) { }

  ngOnInit(): void {
    this.obsServiceService.getusers().subscribe( (data) => {
      this.details=data['name'];
    }),(error:any)=>{
      console.log(error);

    };

    this.obsServiceService.getuser().toPromise().then(Response=>{
      this.toDetails=Response;
    });
  }

}
