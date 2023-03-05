import { Component, OnInit, Inject } from '@angular/core';
import { MessageService } from '../message.service';
import { DOCUMENT } from '@angular/common';
import { FormBuilder , FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public map: any = { lat: 51.678418, lng: 7.809007 };
  messages = [];
  selectedMessage : Event;
  result = false;
  InsertedMessageData : any = {}

  MessageDataForm : FormGroup;
  submitted = false;
  success = false;
  isShow = true;

  constructor( private _messageService : MessageService , @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
  }

  postMessage(){
    this._messageService.postMessages(this.InsertedMessageData)
    .subscribe(
      res => {
        this.messages.push(res)
        this.selectedMessage = res
      },
      err =>{
        console.log(err)
      }
    )

  }

  
  refreshPage() {
    this._document.defaultView.location.reload();
  }

}


