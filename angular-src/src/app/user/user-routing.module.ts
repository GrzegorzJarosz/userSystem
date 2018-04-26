import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';


const userRoutes: Routes = [
  { path: 'users',  component: UserListComponent },
  { path: 'users/:id', component: UserDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
