import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAttendancePage } from './my-attendance.page';

const routes: Routes = [
  {
    path: '',
    component: MyAttendancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAttendancePageRoutingModule {}
