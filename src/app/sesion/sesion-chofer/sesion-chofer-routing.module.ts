import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SesionChoferPage } from './sesion-chofer.page';

const routes: Routes = [
  {
    path: '',
    component: SesionChoferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SesionChoferPageRoutingModule {}
