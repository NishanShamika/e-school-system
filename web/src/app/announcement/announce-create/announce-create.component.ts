import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

import { Announcement } from "../../models/Announcement";
import { AnnouncementService } from "src/app/services/Announcement.service";

@Component({
  selector: 'app-announce-create',
  templateUrl: './announce-create.component.html',
  styleUrls: ['./announce-create.component.css']
})
export class AnnounceCreateComponent implements OnInit {

  form: FormGroup;
  profile: Announcement;
  imageData: string;

  constructor(private profileService: AnnouncementService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null),
      des: new FormControl(null),
      image: new FormControl(null),
      image1:new FormControl(),
    });
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
    this.profileService.addProfile(this.form.value.name,this.form.value.des, this.form.value.image);
    this.form.reset();
    this.imageData = null;
  }

}
