import { Component, OnInit } from '@angular/core';
import { ConfirmService } from './confirm.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  confOpened = false;

  constructor(private confirmService: ConfirmService) { }

  ngOnInit() {
    this.confirmService.openConfirm.subscribe((open)=>{
      this.confOpened = open;
    });
  }

  onAnswer(resp){
    this.confirmService.answerEmiter.next(resp);
  }

}
