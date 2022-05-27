import { Component, OnInit } from '@angular/core';

import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomNameValidaor } from '../username.validator';

@Component({
  selector: 'app-custom-val-com',
  templateUrl: './custom-val-com.component.html',
  styleUrls: ['./custom-val-com.component.css']
})
export class CustomValComComponent implements OnInit {
    genders=['male','female'];
    signUpForm!:FormGroup;
    forbiddenUsernames=['madhu'];
    editMode=false;
    disp='piping'

  constructor() { }

    ngOnInit(): void {
      this.signUpForm = new FormGroup({
          'sno':new FormControl(null),
          'username': new FormControl(null, 
                     [Validators.required, 
                     this.forbiddenNames.bind(this),
                     CustomNameValidaor.nameVal]),
          'mailid':new FormControl(null, [Validators.required, Validators.email]),
        
      });
    }
  
    onSubmit(){
      this.editMode=true;
      console.log(this.signUpForm);
    }
  
    forbiddenNames(control: FormControl): {[s: string]: boolean} | null {
      if(this.forbiddenUsernames.indexOf(control.value) !== -1){
        return {'nameIsForbidden':true};
      }
  
      return null;
    }
  
  }

