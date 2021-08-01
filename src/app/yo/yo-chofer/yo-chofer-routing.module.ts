import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YoChoferPage } from './yo-chofer.page';

const routes: Routes = [
  {
    path: '',
    component: YoChoferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoChoferPageRoutingModule {}
