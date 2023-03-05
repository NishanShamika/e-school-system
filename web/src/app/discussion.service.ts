import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DiscussionService {

  private _discussionsGetUrl = "http://localhost:3000/api/discussions";
  private _discussionsPostUrl = "http://localhost:3000/api/discussion";

  constructor(private http : HttpClient) { }

  getDiscussions(){
    return this.http.get<any>(this._discussionsGetUrl)
  }

  postDiscussions(discussion){
    return this.http.post<any>(this._discussionsPostUrl, discussion)
  }

  private _setDeadline = "http://localhost:3000/api/setDeadline/";

  setDeadline(user){

    let body = new HttpParams()
    .set('id', user.id)
    .set('dateOfExam', user.dateOfExam);

    return this.http.put<any>(`${this._setDeadline}${user.id}/${user.dateOfExam}`, body.toString(),{
      headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  private _putUrlD = 'http://localhost:3000/api/discussion/';
  deletePost(_id :any){

    return this.http.delete<any>(this._putUrlD + _id )
   }

   addReply(discussionId, replyData){

    let requestBody = {
      id : discussionId,
      reply : replyData
    }

    return this.http.patch<any>('http://localhost:3000/api/discussions/reply', requestBody);
  }
}
