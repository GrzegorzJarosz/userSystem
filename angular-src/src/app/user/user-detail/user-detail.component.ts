import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;
  currentUrl: any;

  constructor(
     private route: ActivatedRoute,
     private router: Router,
     private userService: UserService
  ) { }

  ngOnInit() {
    this.currentUrl= this.route.snapshot.params;
    this.userService.getUserById(this.currentUrl.id).subscribe((user)=>{
      this.user = user;
    });
  }

}
