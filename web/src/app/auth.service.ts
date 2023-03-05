import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl ="http://localhost:3000/api/login";
  private _putUrl = "http://localhost:3000/api/user/";
  private _detailChangeUrl = "http://localhost:3000/api/userdetail/";
  private _resetPassword = "http://localhost:3000/api/user/";
  private _putExamDateUrl ="http://localhost:3000/api/userExamDate/";




  constructor(private http : HttpClient ,
      private _router : Router
    ) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this._router.navigate(['/home'])
  }

  getToken(){
    return localStorage.getItem('token')
  }


  getUser(){
    return localStorage.getItem('user')
  }

  isPremiumUser(){
    let _user = JSON.parse(
      localStorage.getItem('user')
    );

    return _user.access;

  }

  isTeacher(){
    let _user = JSON.parse(
      localStorage.getItem('user')
    );

    if(_user.role==="Teacher" && _user.NICNumber!=null){
      return true;
    }else {
      return false;
    }
  }

  updateUser(user){
    let body = new HttpParams()
    .set('access', user.access);
    return this.http.put<any>(`${this._putUrl}${user._id}`, body.toString(),{
      headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }


  updateUserExamDate(user){
    let body = new HttpParams()
    .set('dateOfExam', user.dateOfExam);
    return this.http.put<any>(`${this._putExamDateUrl}${user._id}`, body.toString(),{
      headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  sendResetPassword(user){
    let body = new HttpParams()
    .set('email', user.email)
    .set('phone', user.phone);
    return this.http.put<any>(`${this._resetPassword}${user.email}/${user.phone}`, body.toString(),{
      headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  updateUserDetails(user){
    let body = new HttpParams()
    .set('name', user.name)
    .set('email', user.email)
    .set('grade', user.grade)
    .set('phone', user.phone)
    .set('school', user.school)
    .set('password', user.password);

    return this.http.put<any>(`${this._detailChangeUrl}${user._id}`, body.toString(),{
      headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }




//////////////////////////////////admin
private _putUrl7 = 'http://localhost:3000/api/userdetails/';
  userdetails(){
   return this.http.get<any>(this._putUrl7);
 }


 private _putUrlD = 'http://localhost:3000/api/userdetails/';
 deleteUser(_id :any){

   return this.http.delete<any>(this._putUrlD + _id )
  }

}
