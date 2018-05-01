import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user.service';
import { UserNewComponent } from './user-new/user-new.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    UserRoutingModule
  ],
  declarations: [UserDetailComponent, UserListComponent, UserNewComponent, UserEditComponent],
  providers:[UserService]
})
export class UserModule { }
