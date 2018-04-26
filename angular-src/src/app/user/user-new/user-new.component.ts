import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
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
	public myForm: FormGroup;
  name: string;
	firstName: string;
	lastName: string;
	password: string;
	birthDate: Date;
	groups = [];

  constructor(
    private service: UserService,
    private groupService: GroupService,
		private fb: FormBuilder,
		private router: Router) { }

    ngOnInit() {
      this.groupService.getAllGroups().subscribe((groups)=>{
        this.groupsToTake = groups;
      });

      this.myForm = this.fb.group({
        name: ['', [Validators.required]],
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        password: ['', [Validators.required]],
        birthDate: ['', [Validators.required]],
        groups: this.fb.array([])
      });

      this.addGroup()
  }

  initGroup() {
     return this.fb.group({
        name: ['', Validators.required]  // =groupname
     });
  }

  addGroup() {
    const control = <FormArray>this.myForm.controls['groups'];
    const addrCtrl = this.initGroup();
    control.push(addrCtrl);
  }

  getGroup(myForm){
    return myForm.get('groups').controls;
  };

  removeGroup(i: number) {
     const control = <FormArray>this.myForm.controls['groups'];
     control.removeAt(i);
  }

  save(model) {
    const newUser = {
      name: model.value.name,
      firstName: model.value.firstName,
      lastName: model.value.lastName,
      password: model.value.password,
      birthDate: model.value.birthDate,
      groups: model.value.groups
    };

    this.service.addNewUser(newUser).subscribe(data => {
      this.router.navigate(['/users']);
    });
  }


}
