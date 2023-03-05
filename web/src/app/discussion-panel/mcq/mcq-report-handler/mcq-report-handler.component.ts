import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { McqService } from 'src/app/services/mcq.service';

@Component({
  selector: 'app-mcq-report-handler',
  templateUrl: './mcq-report-handler.component.html',
  styleUrls: ['./mcq-report-handler.component.css']
})
export class McqReportHandlerComponent implements OnInit {

  reportedMcqList : any = []

  constructor(
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.getReportedMcq();
  }

  getReportedMcq(){
    this.http.get('http://localhost:3000/mcq/mcq-reported').subscribe((res)=>{
      this.reportedMcqList = res;
    })
  }

  deleteMcq(mcqId){
    this.http.delete(`http://localhost:3000/mcq/${mcqId}`).subscribe((res)=>{
      this.getReportedMcq();
    })
  }

  rejectMcq(mcqId){
    console.log(mcqId);
    let requestBody = {
      id : mcqId
    }
    
    this.http.patch('http://localhost:3000/mcq/mcq-decline-reported', requestBody).subscribe((res)=>{
      this.getReportedMcq();
    })
  }

  calculateIndex(index){
    let i = ((((index + 1) * index)/2)%4)+1;
    return i;
  }

  shuffleAns(index,ans1,ans2,ans3,ans4){
    let iterator = this.calculateIndex(index);

    let ansArr = [ans1,ans2,ans3,ans4];
    console.log("Before :::: "+ansArr);
    let temp;
    for(let i = 0; i < iterator; i++){
      temp = ansArr[i];
      ansArr[i] = ansArr[ansArr.length-i];
      ansArr[ansArr.length-i] = temp;
    }

    console.log("After :::: "+ansArr);
    return ansArr;
  }

}
