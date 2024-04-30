import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacionemailPage } from './confirmacionemail.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacionemailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacionemailPageRoutingModule {}
