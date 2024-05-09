import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewLeaveApplicationPageRoutingModule } from './new-leave-application-routing.module';

import { NewLeaveApplicationPage } from './new-leave-application.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewLeaveApplicationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewLeaveApplicationPage]
})
export class NewLeaveApplicationPageModule {}
