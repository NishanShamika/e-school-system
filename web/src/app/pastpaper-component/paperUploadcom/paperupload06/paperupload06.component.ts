import { Component, OnInit } from '@angular/core';
import { PaperService } from 'src/app/services/paper.service';
import { FormControl, FormArray, FormBuilder, Validators,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-paperupload06',
  templateUrl: './paperupload06.component.html',
  styleUrls: ['./paperupload06.component.css']
})
export class Paperupload06Component implements OnInit {

  constructor(private VideoService : PaperService,
   

    ) { }

  signupForm: FormGroup;
  submitted = false;

  ngOnInit(): void {

  }




  public uploadlink :any = {}



  sendData(){
    console.log(this.uploadlink)
    this.VideoService.uploadgrade06(this.uploadlink)
    alert('Upload sucess')

  }
}
