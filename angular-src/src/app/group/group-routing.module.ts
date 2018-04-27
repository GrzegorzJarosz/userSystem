import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupListComponent } from './group-list/group-list.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupNewComponent } from './group-new/group-new.component';

const groupRoutes: Routes = [
  { path: 'groups',  component: GroupListComponent },
  { path: 'groups/addnew', component: GroupNewComponent },
  { path: 'groups/:id', component: GroupDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(groupRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GroupRoutingModule { }
