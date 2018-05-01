import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';
import { GroupService } from '../../group/group.service';
import { User } from '../user';
import { Group } from '../../group/group';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  groupsToTake;
  user: User;
  currentUrl: any;
  groupToTakeOpt:boolean = false;

  constructor(
     private route: ActivatedRoute,
     private router: Router,
     private userService: UserService,
     private groupService: GroupService,
  ) { }

  ngOnInit() {
    this.currentUrl= this.route.snapshot.params;
    this.userService.getUserById(this.currentUrl.id).subscribe((user)=>{
      this.user = user;

    });
    this.groupService.getAllGroups().subscribe((groups)=>{
      this.groupsToTake = groups;
    });
  }

  addToSelectedGroups(n){
    this.user.groups.push({name:n});
    this.addGroup();
  }

  addGroup(){
    this.groupToTakeOpt= !this.groupToTakeOpt;
    //actualiz array of groups to take
    this.user.groups.forEach((elA)=>{
      this.groupsToTake = this.groupsToTake.filter((elB)=>{
        if(elA.name == elB.name){return false} else {return true};
      });
    });
  }

  removeGroup(gName){
    let todel = this.user.groups.map(e=>e.name).indexOf(gName);
    this.user.groups.splice(todel,1);
    //actualiz array of groups to take
    this.groupsToTake.push({name:gName});
  }

  updateUser(user){
    this.userService.updateUser(user).subscribe((res)=>{this.router.navigate(['/users'])});
  }

}
