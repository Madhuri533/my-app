import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-http-comp',
  templateUrl: './http-comp.component.html',
  styleUrls: ['./http-comp.component.css']
})
export class HttpCompComponent implements OnInit {
  signUpForm!:FormGroup;
  disp=[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      
        'name': new FormControl(null),
        'age':new FormControl(null),
        'color':new FormControl(null)
    })
  }
  
  onSubmit(){
    // console.log(this.signUpForm.value);
    this.http.post('https://crudcrud.com/api/981c20c2837d45f3b9d0208536bf1666/unicorns',{name:this.signUpForm.value.name,
                                                                           age:this.signUpForm.value.age,
                                                                          color:this.signUpForm.value.color})
                      .subscribe(data => {
                        console.log(data);
                      });
  }

  show(){
    this.http.get('https://crudcrud.com/api/981c20c2837d45f3b9d0208536bf1666/unicorns')
    .subscribe((data:any) => {
      this.disp=data;
    });
    
  }
}
