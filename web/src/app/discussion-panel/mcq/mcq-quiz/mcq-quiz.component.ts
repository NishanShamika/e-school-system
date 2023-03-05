import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { HelperService } from 'src/app/services/helper.service';
import { Option, Question, Quiz, QuizConfig } from 'src/app/models/index';
import { McqService } from 'src/app/services/mcq.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mcq-quiz',
  templateUrl: './mcq-quiz.component.html',
  styleUrls: ['./mcq-quiz.component.css'],
  providers: [QuizService]
})
export class McqQuizComponent implements OnInit {

  quizes: any[];
  // quiz: Quiz = new Quiz(null);
  quiz : any = {};
  mode = 'quiz';
  quizName: string;
  config: QuizConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': true,  // if true, it will move to next question automatically when answered.
    'duration': 300,  // indicates the time (in secs) in which quiz needs to be completed. 0 means unlimited.
    'pageSize': 1,
    'requiredAll': false,  // indicates if you must answer all the questions before submitting.
    'richText': false,
    'shuffleQuestions': false,
    'shuffleOptions': false,
    'showClock': false,
    'showPager': true,
    'theme': 'none'
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = '00:00';
  duration = '';
  public mcq : Array<any> = [];
  marks : number = 0;
  submited : boolean = false;

  subject : string = '';
  grade : string = '';

  level : number;
  newLevel : number;

  selectedMcqIdToReport : string;

  constructor(
    private quizService: QuizService,
    private McqService: McqService,
    private activedRoute : ActivatedRoute
    ) { }

  getUser(){
    this.level = JSON.parse(localStorage.getItem('user')).level;
  }

  getPaperSubject(){
    var subject = this.activedRoute.snapshot.paramMap.get('subject');
      this.subject = subject;
      return subject;
  }

  getPaperGrade(){
    var grade = this.activedRoute.snapshot.paramMap.get('grade');
    this.grade = grade;
    return grade;
  }

  ngOnInit() {
    this.marks=0;
    this.getUser();
    this.McqService.getmcq(this.getPaperGrade(), this.getPaperSubject())
      .subscribe(
        (data)=>{
          for (const question of data) {
            console.log(question);
            let temp = {
              id: question._id,
              question: question.name,
              addedTeacherName : question.addedTeacherName,
              answer : question.name1,
              answered : 'Not Answered',
              options: [
                {
                  name: question.answer1,
                  isAnswer: false
                },
                {
                  name: question.answer2,
                  isAnswer: false
                },
                {
                  name: question.answer3,
                  isAnswer: false
                },
                {
                  name: question.name1,
                  isAnswer: true
                }
              ]
            }
            this.mcq.push(temp);
          }
          this.pager.count = this.mcq.length
        },
      err=>{
        console.log(err);
      })

    this.quizes = this.quizService.getAll();
    this.quizName = this.quizes[0].id;
    this.loadQuiz(this.quizName);
  }

  loadQuiz(quizName: string) {
    let res= this.quizService.get(quizName)
      this.quiz = new Quiz(res);
      this.pager.count = this.mcq.length;
      this.startTime = new Date();
      this.ellapsedTime = '00:00';
      this.timer = setInterval(() => { this.tick(); }, 1000);
      this.duration = this.parseTime(this.config.duration);
   
    this.mode = 'quiz';
  }

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.config.duration && !this.submited) {
      this.onSubmit();
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  get filteredQuestions() {
    return (this.mcq.length != 0) ?
      this.mcq.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: any, option: Option) {
    if (question.id != null) {
      question.options.forEach((x) => {
        if (x.selected == undefined) {
          x.selected = false;
        }else{
          if(x.selected === x.isAnswer){
            this.marks++;
          }
          question.answered = 'Answered';
        }
      });
    }

    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }

  isAnswered(question: Question) {
    return question.answered;
    // return question.options.every(x => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  };

  onSubmit() {
    let answers = [];
    let answeredMcqIdList = [];
    this.mcq.forEach(x => {
      if(x.answered === 'Answered'){
        answeredMcqIdList.push(x.id);
      }
      answers.push(
      { 'questionId': x.id, 'answered': x.answered }
      )});
  
    this.McqService.addResults(this.marks,answeredMcqIdList).subscribe((res)=>{
      console.log(res);
      this.mode = 'result';
      this.submited = true;
      this.newLevel = res.data.level;
      console.log("New Level : "+this.newLevel);
    });
  }

  reportMcq(mcqId){
    this.selectedMcqIdToReport = mcqId;
    this.McqService.reportMcq(mcqId).subscribe((res)=>{
      console.log(res);
    })
  }

  disableReportBtn(mcqId){
    if(this.selectedMcqIdToReport === mcqId){
      return true;
    }
    return false;
  }


  calculateIndex(index){
    let i = (Math.round(((index + 1) * index)/2)%4)+1;
    return index;
  }

  shuffleAns(index,options){

    let iterator = this.calculateIndex(index);  
    let ansArr = options;

    let temp = ansArr[3];
    ansArr[3] = ansArr[iterator];
    ansArr[iterator] = temp;

    return ansArr;
  }

}
