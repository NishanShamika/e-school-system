import { Component, OnInit, EventEmitter } from "@angular/core";
import { VideoService } from "src/app/services/video.service";
import { Video } from "src/app/video";
import { Router, ActivatedRoute } from "@angular/router";
import {AdminService} from 'src/app/shared/admin.service';
import { AuthService } from "src/app/auth.service";

@Component({
  selector: "app-videodisplay",
  templateUrl: "./videodisplay.component.html",
  styleUrls: ["./videodisplay.component.css"],
})
export class VideodisplayComponent implements OnInit {
  videos: [];
  video;
  showMainContent: Boolean = false;
  searchedVideo  = [];
  selectedTeacher : Event;
  result = false;
  InsertedTeacherData : any = {}
  area : String;

name1:String;

  submitted = false;
  success = false;
  isShow = true;
  hideList = false;
  public SelectVideo = new EventEmitter();

  constructor(
    private _videoService: VideoService,
    private _router: Router,
    private route: ActivatedRoute,
    private _eventService : VideoService,
    public _authservice:AuthService,
    public adminservice:AdminService,

  ) {}

  ngOnInit(): void {
    this._videoService.getVideos06().subscribe((data) => (this.videos = data));
    console.log("videos array", this.videos);
  }

  onSelect(vid: Video) {
    this.SelectVideo.emit(vid);
  }

  deleteVideo(_id: String) {
    this._videoService.deleteVideo06(_id).subscribe((res: any) => {
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
  searchVideo(){
    if(this.name1==null){
      this.hideList=false;
    } else if(this.name1!=null && this.hideList==false){
      this._eventService.searchVideo06(this.name1).subscribe((res: any)=> {
        this.searchedVideo=res,
        this.hideList=true;
        console.log(res)
        err => console.log(err)
      })
    }  else if(this.name1!=null && this.hideList==true) {
      this._eventService.searchVideo06(this.name1).subscribe((res: any)=> {
        this.searchedVideo=res,
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
