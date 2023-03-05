import { Component, OnInit , Inject} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {ApiService} from 'src/app/api.service'
import { AuthService } from '../auth.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  mylinkList = [];
  Users:[];
  user;

  selectedUserDetail : Event[];
  editUser : any={};

  constructor(private auth:AuthService, @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {

    this.auth.userdetails().subscribe(data => this.Users = data);


  }


  refreshPage() {
    this._document.defaultView.location.reload();
  }

  premiumUser(accessId){

    let updateUser = this.editUser;
    updateUser.access = true;
    updateUser._id = accessId;

    this.auth.updateUser(updateUser)
    .subscribe(
      res=> {
        updateUser.push=res;
        this.selectedUserDetail=res;
        console.log(res)
      },
      err => console.log(err)
    )

  }

  deleteUser(_id: string) {
    this.auth.deleteUser(_id).subscribe((res: any) => {
      this.ngOnInit();

  

    });
  }

}
