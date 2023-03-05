import { Component } from '@angular/core';
import { AuthService} from './auth.service';
import { HttpClient } from '@angular/common/http';
import { VideoMaster } from './video-master';
import { Observable } from 'rxjs';
import { AdminService } from "./shared/admin.service";
import $ from "jquery";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngApp';
  AdminData :any;
  UserData :any;
  editedUserData: any;
  Admin :any
  constructor(public _authservice : AuthService,
   public AdminService:AdminService,
   public adminservice: AdminService
    ) {}
    ngOnInit(): void {

      this.AdminData = JSON.parse(
        localStorage.getItem('Admin')
      );

      this.UserData = JSON.parse(
            localStorage.getItem('user')
          );

      $(document).ready(function() {
        $(".menu-icon").on("click", function() {
              $("nav ul").toggleClass("showing");
        });
  });

  // Scrolling Effect

  $(window).on("scroll", function() {
        if($(window).scrollTop()) {
              $('nav').addClass('black');
        }

        else {
              $('nav').removeClass('black');
        }
  })



}
}
