import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GroupService } from '../../group/group.service';
import { Group } from '../../group/group';

@Component({
  selector: 'app-group-new',
  templateUrl: './group-new.component.html',
  styleUrls: ['./group-new.component.css']
})
export class GroupNewComponent implements OnInit {

  group: Group;
  name: string;

  constructor(
     private route: ActivatedRoute,
     private router: Router,
     private groupService: GroupService
  ) { }

  ngOnInit() {
  }

  addGroup(){
    const group = {name: this.name};
    if(this.name != ('' || null)){
      this.groupService.addNewGroup(group).subscribe(()=>{
        this.router.navigate(['/groups']);
      });
    }
  }

}
