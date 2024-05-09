import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewLeaveApplicationPage } from './new-leave-application.page';

const routes: Routes = [
  {
    path: '',
    component: NewLeaveApplicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewLeaveApplicationPageRoutingModule {}
