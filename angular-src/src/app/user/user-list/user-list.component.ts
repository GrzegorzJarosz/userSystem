import { Component, OnInit,OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[];

  constructor( private userService: UserService ) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((users)=>{
      this.users = users;
    });
  }
  ngOnDestroy(){
    this.users = null;
  }


}
