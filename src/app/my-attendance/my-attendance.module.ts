import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAttendancePageRoutingModule } from './my-attendance-routing.module';

import { MyAttendancePage } from './my-attendance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAttendancePageRoutingModule
  ],
  declarations: [MyAttendancePage]
})
export class MyAttendancePageModule {}
