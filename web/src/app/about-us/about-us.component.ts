import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AboutService } from '../services/about.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  form: FormGroup;
  documentData: string;
  Tphoto:any
  constructor(private aboutService:AboutService,private router:Router) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null),
      body: new FormControl(null),
      document: new FormControl(null),
    });
  }
onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ document: file });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.documentData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
onSubmit(){
  //   console.log(this.form.value.title);
  //   console.log(this.form.value.body)
  // console.log(this.form.value.document)
  this. aboutService.addDocument(this.form.value.title,this.form.value.body,this.form.value.document);
      this.form.reset();
      this.documentData = null;
      this.router.navigate(['ViewAbout'])
  }
}