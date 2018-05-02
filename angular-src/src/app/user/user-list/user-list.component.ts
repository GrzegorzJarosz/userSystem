import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { ConfirmService } from '../../confirm/confirm.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[];

  constructor(
    private userService: UserService,
    private confirmService: ConfirmService
  ) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  deleteUser(id, name){
    this.confirmService.confirm(name).then((res) => {
      if(res === true){
        this.userService.deleteUser(id).subscribe(() => {
          this.userService.getAllUsers().subscribe((users) => {
            this.users = users;
          });
        });
      }else{return}
    });
  }


  ngOnDestroy(){
    this.users = null;
  }


}
