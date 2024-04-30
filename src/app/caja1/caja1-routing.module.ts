import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Caja1Page } from './caja1.page';

const routes: Routes = [
  {
    path: '',
    component: Caja1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Caja1PageRoutingModule {}
