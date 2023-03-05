import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {


  private _messagesGetUrl = "http://localhost:3000/api/messages";
  private _messagesPostUrl = "http://localhost:3000/api/message";
  private deleteurl  = 'http://localhost:3000/api/deletemessage/';
  constructor(private http : HttpClient) {  }

  getMessages(){
    return this.http.get<any>(this._messagesGetUrl);
  }

  postMessages(message){
    return this.http.post<any>(this._messagesPostUrl, message);
  }

  deletemessage(_id :any){
    return this.http.delete<any>(this.deleteurl + _id )
  }
}
