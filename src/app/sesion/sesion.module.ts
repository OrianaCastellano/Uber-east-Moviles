import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SesionPageRoutingModule } from './sesion-routing.module';

import { SesionPage } from './sesion.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SesionPageRoutingModule
  
  ],
  declarations: [SesionPage]
})
export class SesionPageModule {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
    
}

}
