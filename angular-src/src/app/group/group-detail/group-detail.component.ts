import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GroupService } from '../group.service';
import { Group } from '../group';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {

  group: Group;
  currentUrl: any;

  constructor(
     private route: ActivatedRoute,
     private router: Router,
     private groupService: GroupService
  ) { }

  ngOnInit() {
    this.currentUrl= this.route.snapshot.params;
    this.groupService.getGroupById(this.currentUrl.id).subscribe((group)=>{
      this.group = group;
    });
  }

}
