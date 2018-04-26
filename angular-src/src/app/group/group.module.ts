import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupRoutingModule } from './group-routing.module';
import { GroupService } from './group.service';
import { GroupNewComponent } from './group-new/group-new.component';

@NgModule({
  imports: [
    CommonModule,
    GroupRoutingModule
  ],
  declarations: [GroupListComponent, GroupDetailComponent, GroupNewComponent],
  providers:[GroupService]
})
export class GroupModule { }
