import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyODRequestPageRoutingModule } from './my-odrequest-routing.module';

import { MyODRequestPage } from './my-odrequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyODRequestPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MyODRequestPage]
})
export class MyODRequestPageModule {}
