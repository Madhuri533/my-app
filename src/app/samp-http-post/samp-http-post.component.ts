import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-samp-http-post',
  templateUrl: './samp-http-post.component.html',
  styleUrls: ['./samp-http-post.component.css']
})
export class SampHttpPostComponent implements OnInit {
  disp: any=[];
  color='';

  constructor(private http: HttpClient) { }
 
  ngOnInit(): void {
  }

  done(info:any){
    // console.log(info.value);
    this.http.post('https://crudcrud.com/api/ba94dbcc36cd48458ce0bd03fcd4bea5/unicorns', {name: info.value, age: 10, color: 'blue'})
    .subscribe(responseData => {
      console.log(responseData);
    });
  }

  onReceiving(){
    this.http.get('https://crudcrud.com/api/ba94dbcc36cd48458ce0bd03fcd4bea5/unicorns'
    // {
    //   headers:new HttpHeaders({'Custom-Header': 'world'})   }
      )
    .pipe(map((data: any) => {
      const arr:any=[];
      for(const key in data){
        if(data.hasOwnProperty(key)){
          arr.push({ ...data[key], id: key });
        }
      }
      return arr;
    }))
    .subscribe(data =>{
      console.log(data);
      this.disp=data;
    })
  }

  onDel(item: any){
    this.http.delete(`https://crudcrud.com/api/ba94dbcc36cd48458ce0bd03fcd4bea5/unicorns/${item._id}`)
    .subscribe(()=>{
      this.disp=[];
    })
  }

}
