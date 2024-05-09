import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewODRequestPageRoutingModule } from './new-odrequest-routing.module';

import { NewODRequestPage } from './new-odrequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewODRequestPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewODRequestPage]
})
export class NewODRequestPageModule {}
