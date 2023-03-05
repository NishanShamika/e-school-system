import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { McqService } from 'src/app/services/mcq.service';

@Component({
  selector: 'app-mcq-delete',
  templateUrl: './mcq-delete.component.html',
  styleUrls: ['./mcq-delete.component.css']
})
export class McqDeleteComponent implements OnInit {

    
  mcqList : Array<any> = [];
  isDataAvailable : boolean = false;

  constructor(
    private http : HttpClient,
    private mcqServices: McqService,
    private activedRoute : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getMCQ();
  }

  getPaperSubject(){
    var subject = this.activedRoute.snapshot.paramMap.get('subject');
      return subject;
  }

  getPaperGrade(){
    var grade = this.activedRoute.snapshot.paramMap.get('grade');
    return grade;
  }

  getMCQ(){
    this.mcqServices.getAllMcqRelatedToPaper(this.getPaperGrade(), this.getPaperSubject()).subscribe((res)=>{
      this.mcqList = res;
      this.isDataAvailable = true;
    })
  }

  deleteMcq(mcqId : string) {
    this.mcqServices.deleteMcq(mcqId).subscribe((res)=>{
      this.getMCQ();
    })
  }


}
