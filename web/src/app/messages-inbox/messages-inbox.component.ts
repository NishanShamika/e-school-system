import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-messages-inbox',
  templateUrl: './messages-inbox.component.html',
  styleUrls: ['./messages-inbox.component.css']
})
export class MessagesInboxComponent implements OnInit {

  constructor( private _messageService : MessageService,
                private _router :Router,
                private route: ActivatedRoute,
    ) { }

  messages = []

  ngOnInit(): void {

    this._messageService.getMessages()
    .subscribe(
      res => {
        this.messages = res
      },
      err => {
        console.log(err)
      }
    )


  }
  deletemessage(_id: String){

    this._messageService.deletemessage(_id).subscribe((res: any) => {
      this.ngOnInit();

   
    });
  }
  reload() {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = "reload";
    this._router.navigate(["./"], { relativeTo: this.route });
  }

}
