import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AdminService } from './../../shared/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AdminService,
    public router: Router,
    private route:ActivatedRoute,
    private adminservice : AdminService
  ) {
    this.signinForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit() { }


loginUser() {
  this.adminservice.loginAdmin(this.signinForm.value)
  .subscribe(
    res => {
      console.log(res)
      localStorage.setItem('AdminToken', res.AdminToken)
      localStorage.setItem('Admin', JSON.stringify(res.Admin))
      this.router.navigate(['/app-dashboard'])
    },


  error => {
         window.alert('Error Email or Password');

       }
  )
  this.reload();
}
reload() {
this.router.routeReuseStrategy.shouldReuseRoute = () => false;
this.router.onSameUrlNavigation = "reload";
this.router.navigate(["./"], { relativeTo: this.route });
}
}





