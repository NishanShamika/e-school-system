import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class McqService {

  constructor(private http: HttpClient) { }

  userId : any = JSON.parse(localStorage.getItem('user'))._id;

  getmcq(grade : string, paperType : string) {
    return this.http.get<any>(`http://localhost:3000/mcq/mcq/${this.userId}`, 
    { params: new HttpParams().set('grade', grade).set('paperType', paperType)
    })
  }

  getAllMcqRelatedToPaper(grade : string, paperType : string) {
    return this.http.get<any>(`http://localhost:3000/mcq/mcq`, 
    { params: new HttpParams().set('grade', grade).set('paperType', paperType)
    })
  }

  getAllMcq() : Observable<any> {
      return this.http.get('http://localhost:3000/mcq/allmcq');
  }

  createmcq(uploadgrade11) {
    this.http.post('http://localhost:3000/mcq/create', uploadgrade11).subscribe(res => {
      console.log(res)
    })
  }

  addResults(marks : number, questionIdList : any): Observable<any>{
    // replace user Id
    let requestBody = {
      userId : this.userId,
      marks : marks,
      questionIdList : questionIdList
    }
    return this.http.patch('http://localhost:3000/mcq/update-level', requestBody);
  }

  deleteMcq(mcqID : string): Observable<any> {
    return this.http.delete(`http://localhost:3000/mcq/${mcqID}`);
  }

}
