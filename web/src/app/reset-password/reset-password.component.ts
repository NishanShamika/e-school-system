import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetUserData : any = {};
  editAlert = false;

  constructor(private _authservice : AuthService, private _router : Router , @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
  }

  resetPassword(){
    this._authservice.sendResetPassword(this.resetUserData)
    .subscribe(
      res => {
        this.resetUserData.push=res;
        this.editAlert=true;
        console.log("success : "+res)
      },
      err => {
        console.log("err :"+err);
        window.alert(err.error)
      }
    )
  }

  




}
