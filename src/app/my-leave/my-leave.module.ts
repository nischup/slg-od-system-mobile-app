import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyLeavePageRoutingModule } from './my-leave-routing.module';

import { MyLeavePage } from './my-leave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyLeavePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MyLeavePage]
})
export class MyLeavePageModule {}
