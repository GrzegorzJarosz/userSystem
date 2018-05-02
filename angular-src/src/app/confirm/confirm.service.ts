import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ConfirmService {

  answerEmiter = new Subject();
  openConfirm = new BehaviorSubject(false);
  
  constructor() { }

  confirm() {
    this.openConfirm.next(true);
    return new Promise((resolve, reject) => {
      this.answerEmiter.subscribe((resp)=>{
        resolve(resp);
        this.openConfirm.next(false);
      });
    });
  }


}
