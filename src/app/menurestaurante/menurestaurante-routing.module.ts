import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenurestaurantePage } from './menurestaurante.page';

const routes: Routes = [
  {
    path: '',
    component: MenurestaurantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenurestaurantePageRoutingModule {}
