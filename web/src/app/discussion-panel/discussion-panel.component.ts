import { Component, OnInit,Inject} from '@angular/core';
import { DiscussionService } from '../discussion.service';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { DOCUMENT ,  DatePipe } from '@angular/common';
import { AuthService } from '../auth.service';
import { JsonpClientBackend } from '@angular/common/http';
import {AdminService} from 'src/app/shared/admin.service';
import {NgbActiveModal, NgbModal, NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-discussion-panel',
  templateUrl: './discussion-panel.component.html',
  styleUrls: ['./discussion-panel.component.css']
})
export class DiscussionPanelComponent implements OnInit {

  discussions = [];
  user = [];
  selectedDiscussion : DiscussionService

  InsertedDiscussionData : any = {}
  length;

  discussionDataForm : FormGroup;
  submitted = false;
  success = false;
  isHidden = true;
  userData : any = {}

  countDown : any ='';
  reply: any = {};

  list = ['1','2','3','4','5','6'];


  constructor(
                private discussionService : DiscussionService,
                @Inject(DOCUMENT) private _document: Document,
                private formBuilder: FormBuilder,
                public _authservice : AuthService,
                public adminservice:AdminService,
                private datepipe : DatePipe
              ) {

    this.discussionDataForm = this.formBuilder.group({
      name: ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required]
    })

   }


  ngOnInit(): void {

    this.discussionService.getDiscussions()
      .subscribe(
        res =>{
          this.discussions=res
          this.length=this.discussions.length
        },
        err => console.log(err)
      );

      this.userData = JSON.parse(
        localStorage.getItem('user')
      );

      this.covertedDate = this.datepipe.transform(localStorage.getItem('dateOfExam'),'medium')
      this.countDownDate = new Date(this.covertedDate).getTime();
      this.length=this.discussions.length
  }

  public beforeChange($event: NgbPanelChangeEvent) {

    if ($event.panelId === 'preventchange-2') {
      $event.preventDefault();
    }

    if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
      $event.preventDefault();
    }
  }


  covertedDate : any=''
  countDownDate : any



  isValid(){
    if(this.discussionDataForm.invalid){
      return false;
    }else {
      return true;
    }
  }
  onSubmit(){
    this.submitted = true;
    if(this.discussionDataForm.invalid){
      return;
    }
    this.success=true;
  }


  postDiscussion(){

    var nowDate = new Date();
    var date = nowDate.getFullYear()+"/"+ (nowDate.getMonth()+1)+'/'+nowDate.getDate();

    let discussiondata = this.InsertedDiscussionData;

    discussiondata.dateofcomment = date;


    if(!this._authservice.loggedIn()){
      discussiondata.name = "Annonymus";
      discussiondata.dateofregister = "NOT A MEMBER";
      discussiondata.imagePath = "http://localhost:3000/images/1.png";
    } else {
      discussiondata.name = this.userData.name;
      discussiondata.dateofregister = "MEMBER SINCE : "+ this.userData.dateofregister;
      discussiondata.role = this.userData.role;
      discussiondata.imagePath= this.userData.imagePath;
    }


    this.discussionService.postDiscussions(discussiondata)
    .subscribe(
      res=>{
        this.discussions.push(res);
        this.selectedDiscussion=res;
      },
      err => console.log(err)
    )
  }

  refreshPage() {
    this._document.defaultView.location.reload();
  }


  deadlinemodel={
    'id':localStorage.getItem('id'),
    'email':localStorage.getItem('email'),
    'dateOfExam':this.covertedDate
  }

  submit(){
    this.covertedDate = this.datepipe.transform(this.countDown,'medium')
    this.countDownDate = new Date(this.covertedDate).getTime();

    this.deadlinemodel.dateOfExam=this.countDown

    localStorage.setItem('dateOfExam',this.countDown)

    this.discussionService.setDeadline(this.deadlinemodel)
    .subscribe(
      res=>{
        this.discussions.push(res);
        this.selectedDiscussion=res;
      },
      err => console.log(err)
    )
  }




demo:any;
x = setInterval(()=>{
  var now = new Date().getTime();
  var distance = this.countDownDate - now;
  var days = Math.floor(distance/(1000*60*60*24));
  var hours = Math.floor((distance % (1000*60*60*24)) /(1000*60*60));
  var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
  var seconds = Math.floor((distance % (1000*60)) / 1000);
  this.demo = days + "Days " + hours + "Hours " + minutes + "Minutes " + seconds +"Seconds" ;
  if (distance<0){
    clearInterval(this.x);
    this.demo = "Expired";
  }
})


deletePost(_id: string) {
 this.discussionService.deletePost(_id).subscribe((res: any) => {
    this.ngOnInit();

    alert("delete sucessfull");

  });
}


postReply(discussionId : string){
    
  var nowDate = new Date();
  var date = nowDate.getFullYear()+"/"+ (nowDate.getMonth()+1)+'/'+nowDate.getDate();

  let replyData = this.reply;

  replyData.dateofreply = date;

  if(!this._authservice.loggedIn()){
    replyData.name = "annonymus";
    replyData.dateofregister = "NOT A MEMBER";
    replyData.imagePath = "http://localhost:3000/images/1.png";
  } else {
    replyData.name = this.userData.name;
    replyData.dateofregister = "MEMBER SINCE : "+ this.userData.dateofregister;
    replyData.role = this.userData.role;
    replyData.imagePath=this.userData.imagePath;
  }

  this.discussionService.addReply(discussionId, replyData)
  .subscribe((res)=>{
    this.discussionService.getDiscussions()
    .subscribe(
      res =>{
        this.discussions=res;
        this.length=this.discussions.length
      },
      err => console.log(err)
    );

    this.userData = JSON.parse(
      localStorage.getItem('user')
    );

    this.covertedDate = this.datepipe.transform(localStorage.getItem('dateOfExam'),'medium')
    this.countDownDate = new Date(this.covertedDate).getTime();
    this.length=this.discussions.length;
  }

  )






}
  
}
