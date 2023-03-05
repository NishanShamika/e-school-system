import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http :HttpClient) {}
  public token:any;
    getDataApi(){
      this.http.get('http://localhost:3000/post').subscribe(res=>{
        console.log(res)
      })
    }



    registerAdmin(registerObj){
      this.http.post('http://localhost:3000/register',registerObj).subscribe(res=>{
        console.log(res)
      })
    }
  }
