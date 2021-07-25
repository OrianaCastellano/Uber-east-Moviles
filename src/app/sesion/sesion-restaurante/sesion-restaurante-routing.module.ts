import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SesionRestaurantePage } from './sesion-restaurante.page';

const routes: Routes = [
  {
    path: '',
    component: SesionRestaurantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SesionRestaurantePageRoutingModule {}
