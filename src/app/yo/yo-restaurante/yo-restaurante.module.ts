import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YoRestaurantePageRoutingModule } from './yo-restaurante-routing.module';

import { YoRestaurantePage } from './yo-restaurante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YoRestaurantePageRoutingModule
  ],
  declarations: [YoRestaurantePage]
})
export class YoRestaurantePageModule {}
