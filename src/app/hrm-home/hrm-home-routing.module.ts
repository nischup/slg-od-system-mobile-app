import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HrmHomePage } from './hrm-home.page';

const routes: Routes = [
  {
    path: '',
    component: HrmHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HrmHomePageRoutingModule {}
