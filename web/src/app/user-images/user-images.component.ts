import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

import { User } from "./../models/user";
import { AnnouncementService } from "src/app/services/Announcement.service";
import { UserImageService } from "../user-image.service";

@Component({
  selector: 'app-user-images',
  templateUrl: './user-images.component.html',
  styleUrls: ['./user-images.component.css']
})
export class UserImagesComponent implements OnInit {

  form: FormGroup;
  profile: User;
  imageData: string;
  imagePath : String;
  selectedUserDetail : Event[];
  editUser : any={};
  userData : any = {}

  constructor(private profileService: UserImageService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      image: new FormControl(null),
    });

    this.userData = JSON.parse(
      localStorage.getItem('user')
    );
  }

  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    this.profileService.addProfile(this.form.value.name,this.userData.email, this.form.value.image);
    this.form.reset();
    this.imageData = null;

    this.searchAndUpdateProfilePic(this.userData.email);
  }



  searchAndUpdateProfilePic(email){

    this.profileService.searchProfileImage(email).subscribe((res: any)=> {
      this.imagePath=res;
      let updateUser = this.editUser;
      updateUser.imagePath = this.imagePath;
      updateUser.email = email;

      this.profileService.updateUserImage(updateUser)
      .subscribe(
        res=> {
          updateUser.push=res;
          this.selectedUserDetail=res;
          console.log(res)
        },
        err => console.log(err)
      )
        err => console.log(err)
      })
  }

}
