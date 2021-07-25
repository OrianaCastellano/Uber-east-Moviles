import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroRestaurantePageRoutingModule } from './registro-restaurante-routing.module';

import { RegistroRestaurantePage } from './registro-restaurante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroRestaurantePageRoutingModule
  ],
  declarations: [RegistroRestaurantePage]
})
export class RegistroRestaurantePageModule {}
