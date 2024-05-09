import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdHomePageRoutingModule } from './od-home-routing.module';

import { OdHomePage } from './od-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdHomePageRoutingModule
  ],
  declarations: [OdHomePage]
})
export class OdHomePageModule {}
