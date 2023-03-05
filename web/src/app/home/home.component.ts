import { DatePipe } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  days;
  hours;
  minutes;
  seconds;


  countDown : any =''
  covertedDate : any=''
  countDownDate : any
  userData : any = {}

  withotRootComponent : Boolean

  constructor(public _authservice : AuthService,
    private datepipe : DatePipe
    ) { }
    
  ngOnInit() {

    this.userData = JSON.parse(
      localStorage.getItem('user')
    );
    this.countDownDate=this.userData.dateOfExam


    this.covertedDate = this.datepipe.transform(this.userData.dateOfExam,'medium')
      this.countDownDate = new Date(this.covertedDate).getTime();

  }

  

  demo:any;
x = setInterval(()=>{
  var now = new Date().getTime();
  var distance = this.countDownDate - now;
  this.days = Math.floor(distance/(1000*60*60*24));
  this.hours = Math.floor((distance % (1000*60*60*24)) /(1000*60*60));
  this.minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
  this.seconds = Math.floor((distance % (1000*60)) / 1000);
  
  if (distance<0){
    clearInterval(this.x);
    this.days=0;
    this.minutes=0;
    this.hours=0;
    this.seconds=0;
  }
})

}