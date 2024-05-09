import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaveDeptApprovalPage } from './leave-dept-approval.page';

const routes: Routes = [
  {
    path: '',
    component: LeaveDeptApprovalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveDeptApprovalPageRoutingModule {}
