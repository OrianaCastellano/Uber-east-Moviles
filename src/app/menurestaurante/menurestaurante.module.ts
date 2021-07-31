import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenurestaurantePageRoutingModule } from './menurestaurante-routing.module';

import { MenurestaurantePage } from './menurestaurante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenurestaurantePageRoutingModule
  ],
  declarations: [MenurestaurantePage]
})
export class MenurestaurantePageModule {}
