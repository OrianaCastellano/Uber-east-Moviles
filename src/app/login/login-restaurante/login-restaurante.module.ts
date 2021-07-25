import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginRestaurantePageRoutingModule } from './login-restaurante-routing.module';

import { LoginRestaurantePage } from './login-restaurante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginRestaurantePageRoutingModule,

      // BrowserModule /* or CommonModule */, 
   ReactiveFormsModule
  
  ],
  declarations: [LoginRestaurantePage]
})
export class LoginRestaurantePageModule {}
