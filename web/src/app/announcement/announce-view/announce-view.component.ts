import { Component, OnInit, OnDestroy } from "@angular/core";

import { Subscription } from "rxjs";

import { trigger, transition, animate, style } from '@angular/animations'
import { AnnouncementService } from "src/app/services/announcement.service";
import { Announcement } from "src/app/models/Announcement";

@Component({
  selector: 'app-announce-view',
  templateUrl: './announce-view.component.html',
  styleUrls: ['./announce-view.component.css'],
  animations:[
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('500ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('500ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class AnnounceViewComponent implements OnInit,OnDestroy {
  profiles: Announcement[] = [];
  private profileSubscription: Subscription;
  current = 0;
  current1 = 1;
  constructor(private profilesService: AnnouncementService) {}

  ngOnInit(): void {
    this.profilesService.getProfiles();
    this.profileSubscription = this.profilesService
      .getProfilesStream()
      .subscribe((profiles: Announcement[]) => {
        this.profiles = profiles;
      });
      setInterval(() => {
        this.current = ++this.current % this.profiles.length;
      }, 3000);

  }




  deleteannouncement(_id: string) {
    this.profilesService.deleteannouncement(_id).subscribe((res: any) => {
      this.ngOnInit();

      
    });
  }






  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }
}
