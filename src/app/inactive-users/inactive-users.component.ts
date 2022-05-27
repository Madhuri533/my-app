import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import{UserDetailsService} from '../user-details.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  public inactiveUserArr:any[];
  // @Input() public users:any;
  // @Output() public willUpdate= new EventEmitter();

  constructor(private userDetailsService: UserDetailsService) { 
    this.inactiveUserArr=this.userDetailsService.inactiveUsers;
  }

  ngOnInit(): void {
  }
  activeOne(id:any){
    this.userDetailsService.inactiveToActiveMembers();
    this.userDetailsService.activeUsers.push(this.inactiveUserArr[id]);
    this.userDetailsService.inactiveUsers.splice(id,1);

    // this.inactiveUserArr.splice(this.inactiveUserArr.findIndex((item) => item === Items), 1);

    // this.willUpdate.emit(Items);

  }

}
