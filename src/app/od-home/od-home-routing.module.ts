import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdHomePage } from './od-home.page';

const routes: Routes = [
  {
    path: '',
    component: OdHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdHomePageRoutingModule {}
