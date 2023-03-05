import { Component, OnInit,ElementRef,ViewChild, Inject  } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from "@angular/forms";
import { AdminService } from '../../shared/admin.service';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/admin/_helpers/must-match.validator';
import { DOCUMENT } from '@angular/common';
import {Admin} from 'src/app/models/admin'
import { FormControl } from "@angular/forms";
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

name:any;
registerForm: FormGroup;
submitted = false;

constructor(private formBuilder: FormBuilder,private adminservice :AdminService,private _router :Router, @Inject(DOCUMENT) private _document: Document, ) { }

ngOnInit() {
    this.registerForm = this.formBuilder.group({
        title: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
       NicNumber: ['', Validators.required],
        Mobile: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
}

get f() { return this.registerForm.controls; }

registerUser() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  let newuser = this.registerForm.value;
  this.adminservice.registerAdmin(newuser)
  .subscribe(
    res => {
      console.log(res)
      localStorage.setItem('AdminToken', res.AdminToken)
      this._router.navigate(['/app-dashboard'])
    },
    err =>{ console.log(err)
    window.alert(err.error)
  }

  )

}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

refreshPage() {
  this._document.defaultView.location.reload();
}



onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}

}
