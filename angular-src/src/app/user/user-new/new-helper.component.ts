import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GroupService } from '../../group/group.service';
import { User } from '../user';
import { Group } from '../../group/group';

@Component({
  selector: 'app-new-helper',
  templateUrl: './new-helper.component.html',
  styleUrls: ['./new-helper.component.css']
})
export class NewHelperComponent implements OnInit{

  constructor(private groupService: GroupService) { }

  @Input('group')
  public groupForm:FormGroup;
  groups;

  ngOnInit(){
    this.groupService.getAllGroups().subscribe((groups)=>{
      this.groups = groups;
    });
  }

}
