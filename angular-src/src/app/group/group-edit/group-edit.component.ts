import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../user/user.service';
import { GroupService } from '../group.service';
import { User } from '../../user/user';
import { Group } from '../group';

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css']
})
export class GroupEditComponent implements OnInit {

  usersToTake;
  group: Group;
  currentUrl: any;
  userToTakeOpt:boolean = false;

  constructor(
     private route: ActivatedRoute,
     private router: Router,
     private userService: UserService,
     private groupService: GroupService,
  ) { }


  ngOnInit() {
    this.currentUrl= this.route.snapshot.params;
    this.groupService.getGroupById(this.currentUrl.id).subscribe((group)=>{
      this.group = group;
    });
    this.userService.getAllUsers().subscribe((users)=>{
      this.usersToTake = users;
    });
  }

  addToSelectedUsers(n){
    this.group.users.push({name:n});
    this.addUser();
  }

  addUser(){
    this.userToTakeOpt= !this.userToTakeOpt;
  }

  removeUser(gName){
    let todel = this.group.users.map(e=>e.name).indexOf(gName);
    this.group.users.splice(todel,1);
    console.log(todel);
  }

  updateGroup(group){
    console.log(group);
    this.groupService.updateGroup(group).subscribe((res)=>{this.router.navigate(['/groups'])});
  }




}
