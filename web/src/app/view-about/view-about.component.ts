import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-view-about',
  templateUrl: './view-about.component.html',
  styleUrls: ['./view-about.component.css']
})
export class ViewAboutComponent implements OnInit {

  constructor(private aboutService:AboutService) { }
  aboutDetails:any
  about:any
  ngOnInit(): void {







//
this.aboutService.getdocuments();
this.aboutService.getdocument.subscribe((documents)=>{
  this.aboutDetails = documents;
  this.about=this.aboutDetails.documents;
  console.log(this.about)




})


  }

}
