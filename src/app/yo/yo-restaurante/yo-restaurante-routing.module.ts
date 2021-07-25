import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YoRestaurantePage } from './yo-restaurante.page';

const routes: Routes = [
  {
    path: '',
    component: YoRestaurantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoRestaurantePageRoutingModule {}
