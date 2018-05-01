import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService} from '../user.service';
import { GroupService } from '../../group/group.service';
import { User } from '../user';
import { Group } from '../../group/group';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  groupsToTake;
  groupsToTakeOpt: boolean = false;
  name: string;
	firstName: string;
	lastName: string;
	password: string;
	birthDate: Date;
	groups = [];

  constructor(
    private service: UserService,
    private groupService: GroupService,
		private router: Router
  ) { }

  ngOnInit() {
    this.groupService.getAllGroups().subscribe((groups)=>{
      this.groupsToTake = groups;
      //console.log(this.groupsToTake)
    });
  }


  addGroup() {
    this.groupsToTakeOpt = !this.groupsToTakeOpt;
  }

  addToSelectedGroups(name){
    this.addGroup();
    this.groups.push({name:name});
    let todel = this.groupsToTake.map(e => e.name).indexOf(name);
    this.groupsToTake.splice(todel,1);
  }

  getGroup(myForm){  }


  removeGroup(gName) {
    let todel = this.groups.map(e => e.name).indexOf(gName);
    this.groups.splice(todel,1);
    this.groupsToTake.push({name:gName});
  }

  //save() {
  onSubmit(valid){
    if (!valid) {return false}
    const newUser = {
      name: this.name,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
      birthDate: this.birthDate,
      groups: this.groups
    };

    this.service.addNewUser(newUser).subscribe(data => {
    this.router.navigate(['/users']);
    });
  }

}
