import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/shared/admin.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-admin-datails',
  templateUrl: './admin-datails.component.html',
  styleUrls: ['./admin-datails.component.css']
})
export class AdminDatailsComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  Admin: Admin[] = [];
  current = 0;
  private profileSubscription: Subscription;



  ngOnInit(): void {
    this.adminService.admindetails().subscribe(data => this.Admin = data);

  }



}
