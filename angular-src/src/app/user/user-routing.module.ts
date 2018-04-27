import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserEditComponent } from './user-edit/user-edit.component';


const userRoutes: Routes = [
  { path: 'users',  component: UserListComponent },
  { path: 'users/addnew',  component: UserNewComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'users/edit/:id', component: UserEditComponent }

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
