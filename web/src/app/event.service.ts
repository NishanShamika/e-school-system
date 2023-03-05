import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";
import { Router } from '@angular/router';

import { Teacher } from './models/teacher';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = "http://localhost:3000/api/teachers";

  private _eventPostUrl = "http://localhost:3000/api/teacher";
  private _searchUrl = "http://localhost:3000/api/teachers/";

 private _DeleteUrl = "http://localhost:3000/api/deleteads/";
  constructor(private http : HttpClient) { }

  getEvents(){
    return this.http.get<any>(this._eventsUrl)
  }

/*
  postEvents(teacher){
    return this.http.post<any>(this._eventPostUrl,teacher)
  }
*/
  searchTeacher(area:any){
    return this.http.get<any>(this._searchUrl+ area)
  }

   deleteEvent(_id :any){

  return this.http.delete<any>(this._DeleteUrl + _id )
 }

 private profiles: Teacher[] = [];
 private profiles$ = new Subject<Teacher[]>();
 readonly url = "http://localhost:3000/teacherAdd";

 getProfiles() {
  this.http
    .get<{ profiles: Teacher[] }>(this.url)
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






addProfile(
  name: string,
  Subject:string,
grade:string,
 area: string,

  Telephone:string,
  email:string,

  description: string, image: File): void {
const profileData = new FormData();

profileData.append("name", name);
profileData.append("Subject", Subject);

profileData.append("grade", grade);
  profileData.append("area", area);
  profileData.append("Telephone", Telephone);
  profileData.append("email", email);


  profileData.append("description", description);
  profileData.append("image", image, name);
this.http
  .post<{ profile: Teacher }>(this.url, profileData)
  .subscribe((profileData) => {
    const profile: Teacher = {
      _id: profileData.profile._id,
      Subject: Subject,
      grade:grade,
      Telephone:Telephone,
        email:email,
        area:area,

      name: name,
      description:description,
      imagePath: profileData.profile.imagePath,
    };
    this.profiles.push(profile);
    this.profiles$.next(this.profiles);
  });
}
}
