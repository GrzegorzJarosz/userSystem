import { Component, OnInit, OnDestroy } from '@angular/core';
import { GroupService } from '../group.service';
import { Group } from '../group';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit, OnDestroy {

  groups: Group[];

  constructor( private groupService :GroupService) { }

  ngOnInit() {
    this.groupService.getAllGroups().subscribe((groups)=>{
      this.groups = groups;
    });
  }

  deleteGroup(id){
    this.groupService.deleteGroup(id).subscribe(
      ()=>{
        this.groupService.getAllGroups().subscribe((groups)=>{
          this.groups = groups;
        });
      }
    );
  }

  ngOnDestroy(){
    this.groups = null;
  }

}
