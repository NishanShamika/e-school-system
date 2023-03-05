import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-grade06',
  templateUrl: './grade06.component.html',
  styleUrls: ['./grade06.component.css']
})
export class Grade06Component implements OnInit {

  constructor(public _authservice : AuthService) { }

  ngOnInit(): void {
  }

}
