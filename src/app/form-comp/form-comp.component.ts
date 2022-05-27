import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-comp',
  templateUrl: './form-comp.component.html',
  styleUrls: ['./form-comp.component.css']
})
export class FormCompComponent implements OnInit {
  @ViewChild("f") public formDone!: NgForm;
  defaultQues:any='teacher';
  answer='';
  genders=['male','female'];
  user={
    username:'',
    mailId:'',
    secretQ:'',
    ans:'',
    gender:''
  }
  submitted=false;

  constructor() { }

  ngOnInit(): void {
    
  }
  suggestUserName(){
    const suggestedName="superUser";
    this.formDone.setValue({
      userData:{
        username:suggestedName,
        email:''
      },
      secret:'pet',
      queAns:'',
      gender:'female'
    });
    // this.formDone.form.patchValue({
    //   userData:{
    //     username:suggestdName
    //   }
    // });
  }
  onSubmit(){
    this.submitted=true;
    this.user.username=this.formDone.value.userData.username;
    this.user.mailId=this.formDone.value.userData.email;
    this.user.secretQ=this.formDone.value.secret;
    this.user.ans=this.formDone.value.queAns;
    this.user.gender=this.formDone.value.gender;
    
    this.formDone.form.reset();
    
  }
  // onSubmit(form:NgForm){
  //   console.log("submitted..");
  // }

}
