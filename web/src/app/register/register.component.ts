import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { MustMatch } from 'src/app/admin/_helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData :any = {}

  userdataForm : FormGroup;
  submitted = false;
  success = false;

  constructor(private _auth : AuthService,
      private _router : Router,
      private formBuilder: FormBuilder
    ) {
    }

    ngOnInit() {
      this.userdataForm = this.formBuilder.group({
          name: ['', Validators.required],
          school: ['', Validators.required],
          NICNumber: ['', [Validators.required, Validators.pattern("^([0-9]{9}[x|X|v|V]|[0-9]{12})")]],
          phone: ['', [Validators.required, Validators.pattern("^((\\+94-?)|0)?[0-9]{10}$")]],
          email: ['', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required]
      }, {
        validator: MustMatch('password', 'confirmPassword')
      });
  }

  get f() { return this.userdataForm.controls; }
    
    isValid(){

      if(this.userdataForm.invalid){
        return false;
      }else {
        return true;
      }
      
    }


    
  onSubmit(){
    this.submitted = true;
    if(this.userdataForm.invalid){
      return;
    }
    this.success=true;
  }


  registerUser(){

    var nowDate = new Date(); 
    var date = nowDate.getFullYear()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getDate();
  
    let newuser = this.userdataForm.value;
    newuser.dateofregister = date;
    newuser.role="Teacher";

    this._auth.registerUser(newuser)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        localStorage.setItem('user', JSON.stringify(res.user))
        localStorage.setItem('password',newuser.password)
        this._router.navigate(['/home'])
        .then(() => {
          window.location.reload();
        });
      },
      err =>{ console.log(err)
      window.alert(err.error)
    }
      
    )
  }
  
}
