import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroRestaurantePageRoutingModule } from './registro-restaurante-routing.module';

import { RegistroRestaurantePage } from './registro-restaurante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroRestaurantePageRoutingModule,
    // BrowserModule /* or CommonModule */, 
   ReactiveFormsModule
  ],
  declarations: [RegistroRestaurantePage]
})
export class RegistroRestaurantePageModule {}
