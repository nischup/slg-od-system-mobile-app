import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ODApprovalPageRoutingModule } from './odapproval-routing.module';

import { ODApprovalPage } from './odapproval.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ODApprovalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ODApprovalPage]
})
export class ODApprovalPageModule {}
