import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyODRequestPage } from './my-odrequest.page';

const routes: Routes = [
  {
    path: '',
    component: MyODRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyODRequestPageRoutingModule {}
