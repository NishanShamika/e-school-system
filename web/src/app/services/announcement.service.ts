import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";

import { Announcement } from "../models/Announcement";
import { Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private profiles: Announcement[] = [];
  private profiles$ = new Subject<Announcement[]>();
  readonly url = "http://localhost:3000/api/announcement";

  constructor(private http: HttpClient) {}

  getProfiles() {
    this.http
      .get<{ profiles: Announcement[] }>(this.url)
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

  addProfile(name: string,des:string, image: File): void {
    const profileData = new FormData();

    profileData.append("name", name);
    profileData.append("des", des);
    profileData.append("image", image, name);
    this.http
      .post<{ profile: Announcement }>(this.url, profileData)
      .subscribe((profileData) => {
        const profile: Announcement = {
          _id: profileData.profile._id,
          des:des,
          name: name,
          imagePath: profileData.profile.imagePath,
        };
        this.profiles.push(profile);
        this.profiles$.next(this.profiles);
      });
  }


  private _putUrlD = 'http://localhost:3000/announcement/announcement/';
  deleteannouncement(_id :any){

    return this.http.delete<any>(this._putUrlD + _id )
   }

}
