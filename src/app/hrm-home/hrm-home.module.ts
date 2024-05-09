import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HrmHomePageRoutingModule } from './hrm-home-routing.module';

import { HrmHomePage } from './hrm-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HrmHomePageRoutingModule
  ],
  declarations: [HrmHomePage]
})
export class HrmHomePageModule {}
