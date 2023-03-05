import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { DatePipe, DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder , Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { FormGroup, FormControl } from '@angular/forms';
import { DiscussionService } from '../discussion.service';
import { UserImageService } from '../user-image.service';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  form: FormGroup;
  editedUserData : any = {}
  isShow = true;
  selectedUserDetail : Event[];
  editAlert = false;
  editUser : any={};

  userData : any = {}

  covertedDate : any=''
  countDownDate : any
  countDown : any =''
  discussions = [];
  selectedDiscussion : DiscussionService
  imagePath : String;
  imageData: string;
  password : String;
  imgsrc1: string;
  


  constructor(public auth: AuthService,
            @Inject(DOCUMENT) private _document: Document ,
            private _router: Router,
            private discussionService : DiscussionService,
            private datepipe : DatePipe,
            public _userImageService : UserImageService,
            private formBuilder: FormBuilder,
            public _d: DomSanitizer


  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      image: new FormControl(null),
    });

    this.userData = JSON.parse(
      localStorage.getItem('user')
    );

    this.imgsrc1=this.userData.imagePath;

    this.password = localStorage.getItem('password');

    this.editedUserData.name = this.userData.name;
    this.editedUserData.email = this.userData.email;
    this.editedUserData.grade = this.userData.grade;
    this.editedUserData.phone = this.userData.phone;
    this.editedUserData.school = this.userData.school;
    this.editedUserData.password = this.password;


      console.log(this.userData.imagePath)

  }


  showForm(){
    this.isShow=!this.isShow
  }

  deadlinemodel={
    'id':localStorage.getItem('id'),
    'email':localStorage.getItem('email'),
    'dateOfExam':this.covertedDate
  }

  submit(){
    this.covertedDate = this.datepipe.transform(this.countDown,'medium')
    this.countDownDate = new Date(this.covertedDate).getTime();

    this.deadlinemodel.dateOfExam=this.countDown

    localStorage.setItem('dateOfExam',this.countDown)

    this.discussionService.setDeadline(this.deadlinemodel)
    .subscribe(
      res=>{
        this.discussions.push(res);
        this.selectedDiscussion=res;
      },
      err => console.log(err)
    )
  }

  updateUser(){

    let updateUser = this.editedUserData;
    updateUser._id = this.userData._id;

    this.auth.updateUserDetails(updateUser)
    .subscribe(
      res=> {
        updateUser.push=res;
        this.selectedUserDetail=res;
        console.log(res)

      },
      err => console.log(err)
    )
      this.editAlert=true;
    // this.auth.logoutUser()
    // this._router.navigate(['/login'])
  }

  UpdateExamDate(accessId){

    this.covertedDate = this.datepipe.transform(this.countDown,'medium')
    this.countDownDate = new Date(this.covertedDate).getTime();

    let updateUser = this.editUser;
    updateUser.dateOfExam = this.countDownDate;
    updateUser._id = accessId;

    this.auth.updateUserExamDate(updateUser)
    .subscribe(
      res=> {
        updateUser.push=res;
        this.selectedUserDetail=res;
        console.log(res)
      },
      err => console.log(err)
    )

  }


  refreshPage() {
    this.showForm();
    window.scrollTo(0, 0);
    this.editAlert=true;
  }

  isLoggedTeacher(){
    return this.auth.loggedIn() && this.auth.isTeacher();
  }


  ///////////////////////////////////////////

  

  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.imgsrc1 = window.URL.createObjectURL(file);
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
    this._userImageService.addProfile(this.userData.name,this.userData.email, this.form.value.image);
    this.searchAndUpdateProfilePic(this.userData.email);
    this._userImageService.addProfile(this.userData.name,this.userData.email, this.form.value.image);
    this.searchAndUpdateProfilePic(this.userData.email);
  }



  searchAndUpdateProfilePic(email){

    this._userImageService.searchProfileImage(email).subscribe((res: any)=> {
      this.imagePath=res;
      let updateUser = this.editUser;
      updateUser.imagePath = this.imagePath;
      updateUser.email = email;

      this._userImageService.updateUserImage(updateUser)
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
