import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-congratulation-modal',
  templateUrl: './congratulation-modal.component.html',
  styleUrls: ['./congratulation-modal.component.css']
})

export class CongratulationModalComponent implements OnInit {

  @Input('level') level = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
