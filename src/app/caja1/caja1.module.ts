import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Caja1PageRoutingModule } from './caja1-routing.module';

import { Caja1Page } from './caja1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Caja1PageRoutingModule
  ],
  declarations: [Caja1Page]
})
export class Caja1PageModule {}
