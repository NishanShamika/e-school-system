import { Component, OnInit,Inject } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import { FormBuilder , FormGroup } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from "src/app/shared/admin.service";
import {Teacher} from 'src/app/models/teacher'
import { FormControl } from "@angular/forms";
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from "rxjs";
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  profiles: Teacher[] = [];
  current = 0;
  private profileSubscription: Subscription;

  events = [];
  searchedTeachers  = [];
  selectedTeacher : Event;
  result = false;
  InsertedTeacherData : any = {}
  area : String;


  TeacherDataForm : FormGroup;
  submitted = false;
  success = false;
  isShow = true;
  hideList = false;
  contactShow = true;


  constructor(
    private _eventService : EventService,
    public _authservice : AuthService,
     @Inject(DOCUMENT) private _document: Document,
     private _router: Router,
     private route: ActivatedRoute,
         public adminservice:AdminService,
         public _d: DomSanitizer
     ) { }


     //get f() { return this.form.controls; }
     form: FormGroup;
       profile: Teacher;
       imageData: string;

  ngOnInit(): void {

    this._eventService.getEvents()
    .subscribe(
      res => this.events=res,
      err => console.log(err)
    );

    this.form = new FormGroup({
      name: new FormControl(null),
      image: new FormControl(null),
      grade:new FormControl(null),
      email: new FormControl(null),
      Telephone: new FormControl(null),
      description: new FormControl(null),
      area: new FormControl(null),
      Subject: new FormControl(null),

    });


  }



  toggleDisplay(){
    this.isShow=!this.isShow;
  }

  refreshPage() {
    this._document.defaultView.location.reload();
  }

  searchTeacher(){

    let searchArea = this.area.toUpperCase();


    if(searchArea==null){
      this.hideList=false;
    } else if(searchArea!=null && this.hideList==false){
      this._eventService.searchTeacher(searchArea).subscribe((res: any)=> {
        this.searchedTeachers=res,
        this.hideList=true;
        console.log(res)
        err => console.log(err)
      })
    }  else if(searchArea!=null && this.hideList==true) {
      this._eventService.searchTeacher(searchArea).subscribe((res: any)=> {
        this.searchedTeachers=res,
        console.log(res)
        err => console.log(err)
      })
    }
  }

  displayMainList(){
    this.hideList=false;
    this.reload();
  }


  reload() {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = "reload";
    this._router.navigate(["./"], { relativeTo: this.route });
  }

  showContacts(){
    this.contactShow=!this.contactShow;
  }

  isLoggedTeacher(){
    return this._authservice.loggedIn() && this._authservice.isTeacher();
  }




  deleteEvent(_id: String) {
    this._eventService.deleteEvent(_id).subscribe((res: any) => {
      this.ngOnInit();

      alert("delete sucessfull");
      this.reload();
    });
  }


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
  imgsrc1= "./assets/img_avatar.png"

  onSubmit() {

    let newArea = this.form.value.area.toUpperCase();

      let data  = this._eventService.addProfile( this.form.value.name,this.form.value.Subject,this.form.value.grade, newArea,  this.form.value.Telephone, this.form.value.email,this.form.value.description,  this.form.value.image);
      console.log(data)
     // window.alert("Registered Sucess")
    this.form.reset();
   this.imageData = null;



}
}
