import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-mcq-subjects',
  templateUrl: './mcq-subjects.component.html',
  styleUrls: ['./mcq-subjects.component.css']
})
export class McqSubjectsComponent implements OnInit {

  route : string = '';
  grade : string = '';

  constructor(
    public _authservice : AuthService,
    private activedRoute : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getPaperType();
  }

  getPaperType(){
    var grade = this.activedRoute.snapshot.paramMap.get('grade');
      this.grade = grade;
      this.route = `/g6e/${grade}/English`
  }

  getRoute(subject : string){
      return `/g6e/${this.grade}/English`
  }

  isLoggedTeacher(){
    return this._authservice.loggedIn() && this._authservice.isTeacher();
  }


}
