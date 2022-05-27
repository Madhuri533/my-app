import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  activeUsers=['denny','rich'];
  inactiveUsers=['henrey','jhon'];
  activeToInactive=0;
  inactiveToActive=0;

  constructor() { }

  activeToInactiveMembers(){
    this.activeToInactive++;
    console.log("active to inactive"+this.activeToInactive);

  }
  inactiveToActiveMembers(){
    this.inactiveToActive++;
    console.log("inactive to active"+this.inactiveToActive);

  }


}
