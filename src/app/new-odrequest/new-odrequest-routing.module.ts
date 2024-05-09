import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewODRequestPage } from './new-odrequest.page';

const routes: Routes = [
  {
    path: '',
    component: NewODRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewODRequestPageRoutingModule {}
