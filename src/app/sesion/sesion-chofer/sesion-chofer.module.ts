import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SesionChoferPageRoutingModule } from './sesion-chofer-routing.module';

import { SesionChoferPage } from './sesion-chofer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SesionChoferPageRoutingModule
  ],
  declarations: [SesionChoferPage]
})
export class SesionChoferPageModule {}
