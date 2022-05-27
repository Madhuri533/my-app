import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, AbstractControl, FormArray, FormControl, FormGroup, Validators, ValidationErrors  } from '@angular/forms';


import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form-com',
  templateUrl: './reactive-form-com.component.html',
  styleUrls: ['./reactive-form-com.component.css']
})
export class ReactiveFormComComponent implements OnInit {
  genders=['male','female'];
  signUpForm!:FormGroup;
  forbiddenUsernames=['madhu'];

  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'mailid':new FormControl(null, 
          [Validators.required, 
            Validators.email,
            this.emailDomain.bind(this)],
          this.forbiddenEmails())
      }),
      'gender':new FormControl('female'),
      'hobbies': new FormArray([])
    });
    this.signUpForm.statusChanges.subscribe(
      (status) =>console.log(status)
    );
    // this.signUpForm.setValue({
    //   'userData':{
    //     'username':'junnu',
    //     'mailid':'junnu@'
    //   },
    //   'gender':'female',
    //   'hobbies':[]
    // });
    this.signUpForm.patchValue({
     'userData':{
      'username':'admin'
     } 
    });
  }

  onSubmit(){
    console.log(this.signUpForm);
  }
  onAddHobby(){
  const cntrl =  new FormControl(null, Validators.required);
  (<FormArray>this.signUpForm.get('hobbies')).push(cntrl);
  }

  getControls(){
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} | null {
    if(this.forbiddenUsernames.indexOf(control.value) !== -1){
      return {'nameIsForbidden':true};
    }

    return null;
  }

  emailDomain(control: AbstractControl) {
    const email:string= control?.value;
    const domain= email?.substring(email.lastIndexOf('@') + 1);
    if(email === '' || domain?.toLowerCase() === 'gmail.com') {
      return null;
    }
    else {
      return {'emailDomain': true};
    }
  }

  forbiddenEmails(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return new Promise<any>((resolve, reject) => {
          setTimeout(() => {
            if(control.value === 'madhu@gmail.com') {
              resolve({'emailIsForbidden': true});
            }
            else{
              resolve(null);
            }
          }, 1500);
    });

  }}


}
