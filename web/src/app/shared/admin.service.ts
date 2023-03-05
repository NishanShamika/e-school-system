import { Subject } from "rxjs";

import { catchError, map } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Admin } from "../models/admin";

@Injectable({
  providedIn: "root",
})
export class AdminService {


  isLoggedin: boolean = false;

  private _registerUrl = "http://localhost:3000/register";
  private _loginUrl = "http://localhost:3000/login";

  constructor(private http: HttpClient, private _router: Router) {}

  //////////////////////////////////admin

  registerAdmin(registerObj) {
    return this.http.post<any>(this._registerUrl, registerObj);
  }
  private _putUrl = "http://localhost:3000/admindetails/";
  admindetails() {
    return this.http.get<any>(this._putUrl);
  }

  getAdminToken() {
    return localStorage.getItem("AdminToken");
  }

  adminLogoutuser() {
    localStorage.removeItem("AdminToken");
    this._router.navigate(["/home"]);
  }

  loginAdmin(Admin) {
    return this.http.post<any>(this._loginUrl, Admin);
  }

  adminLoggedIn() {
    return !!localStorage.getItem("AdminToken");
  }

  getUser() {
    return localStorage.getItem("Admin");
  }
}
