import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Pastpaper } from "src/app/models/Pastpaper";
import { FormBuilder, Validators } from '@angular/forms';
import { PaperService } from 'src/app/services/paper.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paper-upload',
  templateUrl: './paper-upload.component.html',
  styleUrls: ['./paper-upload.component.css']
})
export class PaperUploadComponent implements OnInit {
  form: FormGroup;
  pastpaper: Pastpaper;
  pastpaperData: string;
  lessonname:string;
  grade: string
  constructor(private pastpaperService: PaperService,
    private formBuilder: FormBuilder,
    private _router : Router,private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      lessonname: ['', Validators.required],
      grade: ['', Validators.required],
      pastpaper: ['', Validators.required],
  });




  }

  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ pastpaper: file });
    const allowedMimeTypes = ["application/pdf"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.pastpaperData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
    else {
      alert("file type should be  pdf")
      return;
    }
  }











  onSubmit() {
    this.pastpaperService.addPastpaper(this.form.value.name,this.form.value.lessonname,this.form.value.grade ,this.form.value.pastpaper);
    this.form.reset();
    this.pastpaperData = null;
    alert('upload sucess');
    this.reload();
  }

  reload() {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = 'reload';
    this._router.navigate(['./'], { relativeTo: this.route });
  }

}



















