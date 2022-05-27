import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import{UserDetailsService} from '../user-details.service'

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  public activeUserArry:any[];
  // @Input() public users:any;
  // @Output() public updatedList= new EventEmitter();

  constructor(public userDetailsService: UserDetailsService) {
    this.activeUserArry = this.userDetailsService.activeUsers;
   }

  ngOnInit(): void {
  }

  inactiveOne(id:any){
    this.userDetailsService.activeToInactiveMembers();
    this.userDetailsService.inactiveUsers.push(this.activeUserArry[id]);
    this.userDetailsService.activeUsers.splice(id,1);
    // this.activeUserArry.splice(this.activeUserArry.findIndex((user) => user === item), 1);
    // this.updatedList.emit(item);

  }

}
