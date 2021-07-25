import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroChoferPage } from './registro-chofer.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroChoferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroChoferPageRoutingModule {}
