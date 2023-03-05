import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { McqService } from 'src/app/services/mcq.service';

@Component({
  selector: 'app-mcq-add',
  templateUrl: './mcq-add.component.html',
  styleUrls: ['./mcq-add.component.css']
})
export class McqAddComponent implements OnInit {

  
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  subject : string = '';

  public mcq = [];

  hero = {
    name: '',
    grade : this.getPaperGrade(),
    mcqType : this.getPaperSubject(),
    addedTeacherName : JSON.parse(localStorage.getItem('user')).name,
    name1:'',
    answer1:'',
    answer2:'',
    answer3:''
  };

  constructor(
    private formBuilder: FormBuilder,
    private   McqService: McqService,
    private activedRoute : ActivatedRoute
    ) { }


  ngOnInit(): void {
    // this.McqService.getmcq()
    //   .subscribe((data)=>{
    //     this.mcq=data;
    //     console.log(this.mcq);
    //   },
    //   err=>{
    //   })
  }

  getPaperSubject(){
    var subject = this.activedRoute.snapshot.paramMap.get('subject');
      return subject;
  }

  getPaperGrade(){
    var grade = this.activedRoute.snapshot.paramMap.get('grade');
    return grade;
  }

  onSubmit(): void {
    // Process checkout data here
  
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
    alert("Add MCQ Success");

    this.hero = {
      name: '',
      grade : this.getPaperGrade(),
      mcqType : this.getPaperSubject(),
      addedTeacherName : JSON.parse(localStorage.getItem('user')).name,
      name1:'',
      answer1:'',
      answer2:'',
      answer3:''
    }
  }

  clearInputMethod2() { 
    this.checkoutForm.reset();
  
  }

  public uploadlink :any = {}

  sendData(){
    console.log(this.hero)
    this.McqService.createmcq(this.hero)
    alert("Add MCQ Success");
    this.checkoutForm.reset();
    
    // this.hero = {
    //   name: '',
    //   grade : this.getPaperGrade(),
    //   mcqType : this.getPaperSubject(),
    //   name1:'',
    //   answer1:'',
    //   answer2:'',
    //   answer3:''
    // }
  }

}
