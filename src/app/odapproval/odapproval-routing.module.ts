import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ODApprovalPage } from './odapproval.page';

const routes: Routes = [
  {
    path: '',
    component: ODApprovalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ODApprovalPageRoutingModule {}
