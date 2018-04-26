import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user.service';
import { UserNewComponent } from './user-new/user-new.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [UserDetailComponent, UserListComponent, UserNewComponent],
  providers:[UserService]
})
export class UserModule { }
