import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SesionRestaurantePageRoutingModule } from './sesion-restaurante-routing.module';

import { SesionRestaurantePage } from './sesion-restaurante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SesionRestaurantePageRoutingModule
  ],
  declarations: [SesionRestaurantePage]
})
export class SesionRestaurantePageModule {}
