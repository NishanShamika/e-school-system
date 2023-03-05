import { Component, OnInit, OnDestroy, EventEmitter } from "@angular/core";
import { Subscription } from "rxjs";
import { FormGroup, FormControl } from "@angular/forms";
import { AnnouncementService } from "src/app/services/announcement.service";
import { Announcement } from "src/app/models/announcement";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-anncodelete',
  templateUrl: './anncodelete.component.html',
  styleUrls: ['./anncodelete.component.css']
})
export class AnncodeleteComponent implements OnInit {

  profiles: Announcement[] = [];

  private profileSubscription: Subscription;
  private deleteprofilesEvent = new EventEmitter();
  form: FormGroup;
  profile: Announcement;
  imageData: string;

  constructor(
    private profilesService: AnnouncementService,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.profilesService.getProfiles();
    this.profileSubscription = this.profilesService
      .getProfilesStream()
      .subscribe((profiles: Announcement[]) => {
        this.profiles = profiles;
      });
  }

  deleteannouncement(_id: string) {
    this.profilesService.deleteannouncement(_id).subscribe((res: any) => {
      this.ngOnInit();

      this.reload();
    });
  }
  reload() {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = "reload";
    this._router.navigate(["./"], { relativeTo: this.route });
  }

}
