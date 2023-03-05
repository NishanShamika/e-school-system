import { Component, OnInit, EventEmitter, Inject } from "@angular/core";
import { PaperService } from "src/app/services/paper.service";
import { Pastpaper } from "src/app/models/pastpaper";
import { Router, ActivatedRoute } from "@angular/router";
import { EventService } from 'src/app/event.service';
import { AuthService } from 'src/app/auth.service';
import { FormBuilder , FormGroup } from '@angular/forms';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-grade10paper',
  templateUrl: './grade10paper.component.html',
  styleUrls: ['./grade10paper.component.css']
})
export class Grade10paperComponent implements OnInit {

  Pastpaper: [];



  Papers  = [];
  selectedTeacher : Event;
  result = false;
  InsertedTeacherData : any = {}


name1:String;

  submitted = false;
  success = false;
  isShow = true;
  hideList = false;




  public SelectPaper = new EventEmitter();

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _eventService : PaperService,
    public _authservice : AuthService,
     @Inject(DOCUMENT) private _document: Document,


    private paperServices: PaperService
  ) {}

  ngOnInit(): void {
    this.paperServices
      .getGrade10()
      .subscribe((data) => (this.Pastpaper = data));
  }

  onSelect(vid: Pastpaper) {
    this.SelectPaper.emit(vid);
  }

  deleteGrade10(_id: String) {
    this.paperServices.deleteGrade10(_id).subscribe((res: any) => {
      this.ngOnInit();

      alert("delete sucessfull");
      this.reload();
    });
  }
  reload() {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = "reload";
    this._router.navigate(["./"], { relativeTo: this.route });
  }

  searchPaper10(){
    if(this.name1==null){
      this.hideList=false;
    } else if(this.name1!=null && this.hideList==false){
      this._eventService.searchPaper10(this.name1).subscribe((res: any)=> {
        this.Papers=res,
        this.hideList=true;
        console.log(res)
        err => console.log(err)
      })
    }  else if(this.name1!=null && this.hideList==true) {
      this._eventService.searchPaper10(this.name1).subscribe((res: any)=> {
        this.Papers=res,
        console.log(res)
        err => console.log(err)
      })
    }
  }

  displayMainList(){
    this.hideList=false;
    this.reload();
  }



}
