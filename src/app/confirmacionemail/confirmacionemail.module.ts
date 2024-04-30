import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionemailPageRoutingModule } from './confirmacionemail-routing.module';

import { ConfirmacionemailPage } from './confirmacionemail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionemailPageRoutingModule
  ],
  declarations: [ConfirmacionemailPage]
})
export class ConfirmacionemailPageModule {}
