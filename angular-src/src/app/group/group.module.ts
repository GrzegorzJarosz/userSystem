import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupRoutingModule } from './group-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GroupRoutingModule
  ],
  declarations: [GroupListComponent, GroupDetailComponent]
})
export class GroupModule { }
