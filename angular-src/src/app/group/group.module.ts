import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GroupListComponent } from './group-list/group-list.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupRoutingModule } from './group-routing.module';
import { GroupService } from './group.service';
import { GroupNewComponent } from './group-new/group-new.component';
import { GroupEditComponent } from './group-edit/group-edit.component';

@NgModule({
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule,
    GroupRoutingModule
  ],
  declarations: [GroupListComponent, GroupDetailComponent, GroupNewComponent, GroupEditComponent],
  providers:[GroupService]
})
export class GroupModule { }
