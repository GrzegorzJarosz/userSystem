import { Component, OnInit, OnDestroy } from '@angular/core';
import { GroupService } from '../group.service';
import { ConfirmService } from '../../confirm/confirm.service';
import { Group } from '../group';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit, OnDestroy {

  groups: Group[];

  constructor(
    private groupService: GroupService,
    private confirmService: ConfirmService
  ) { }

  ngOnInit() {
    this.groupService.getAllGroups().subscribe((groups) => {
      this.groups = groups;
    });
  }

  deleteGroup(id){
    this.confirmService.confirm().then((res) => {
      if(res === true){
        this.groupService.deleteGroup(id).subscribe(() => {
          this.groupService.getAllGroups().subscribe((groups) => {
            this.groups = groups;
          });
        });
      }else{return}
    });



  }

  ngOnDestroy(){
    this.groups = null;
  }

}
