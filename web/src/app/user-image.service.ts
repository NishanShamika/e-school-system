

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { map } from "rxjs/operators";

import { User } from "./models/user";
import { Subject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserImageService {
  
  private profiles: User[] = [];
  private profiles$ = new Subject<User[]>();
  readonly url = "http://localhost:3000/userimage";
  private _getImageUrl = "http://localhost:3000/api/userImageList";
  private _searchUrl = "http://localhost:3000/api/userImage/";
  private _updateUrl = "http://localhost:3000/api/userImageUpdate/";

  constructor(private http: HttpClient) {}

  getProfiles() {
    this.http
      .get<{ profiles: User[] }>(this.url)
      .pipe(
        map((profileData) => {
          return profileData.profiles;
        })
      )
      .subscribe((profiles) => {
        this.profiles = profiles;
        this.profiles$.next(this.profiles);
      });
  }

  getProfilesStream() {
    return this.profiles$.asObservable();
  }


  getImageList(){
    return this.http.get<any>(this._getImageUrl)
  }

  searchProfileImage(email:any){
    return this.http.get<any>(this._searchUrl+ email)
  }


  updateUserImage(user){
    let body = new HttpParams()
    .set('imagePath', user.imagePath);
    return this.http.put<any>(`${this._updateUrl}${user.email}`, body.toString(),{
      headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }



  addProfile(name: string,email:string, image: File): void {
    const profileData = new FormData();

    profileData.append("name", name);
    profileData.append("email", email);
    profileData.append("image", image, name);
    this.http
      .post<{ profile: User }>(this.url, profileData)
      .subscribe((profileData) => {
        const profile: User = {
          
          email:email,
          name: name,
          imagePath: profileData.profile.imagePath,
        };
        this.profiles.push(profile);
        this.profiles$.next(this.profiles);
      });
  }


}
