import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData : any = {}
  constructor(private _auth : AuthService,
      private _router : Router
    ) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        localStorage.setItem('user', JSON.stringify(res.user))
        localStorage.setItem('password',this.loginUserData.password)
        this._router.navigate(['/home'])
        .then(() => {
          window.location.reload();
        });
      },
      err => {
        console.log(err)
        window.alert(err.error)
      }
    )
  }

}
