import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface user{
  id:number,
  name:string,
  email:string
}


@Injectable({
  providedIn: 'root'
})
export class ObsServiceService {

  constructor(private http: HttpClient) { }

  getusers():Observable<user>{
    return this.http.get<user>('https://gorest.co.in/public/v2/users');
  }

  getuser(){
    return this.http.get('https://gorest.co.in/public/v2/users');
  }
}
