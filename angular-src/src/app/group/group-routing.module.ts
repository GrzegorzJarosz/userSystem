import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupListComponent } from './group-list/group-list.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupNewComponent } from './group-new/group-new.component';
import { GroupEditComponent } from './group-edit/group-edit.component';

const groupRoutes: Routes = [
  { path: 'groups',  component: GroupListComponent },
  { path: 'groups/addnew', component: GroupNewComponent },
  { path: 'groups/:id', component: GroupDetailComponent },
  { path: 'groups/edit/:id', component: GroupEditComponent }
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
