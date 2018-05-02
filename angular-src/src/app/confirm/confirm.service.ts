import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ConfirmService {

  answerEmiter = new Subject();
  openConfirm = new BehaviorSubject({
    open:false,
    msg:''
  });

  constructor() { }

  confirm(name) {
    this.openConfirm.next({
      open:true,
      msg:'Do you really want to delete '+name+'?'}
    );
    return new Promise((resolve, reject) => {
      this.answerEmiter.subscribe((resp)=>{
        resolve(resp);
        this.openConfirm.next({
          open:false,
          msg:''
        });
      });
    });
  }


}
