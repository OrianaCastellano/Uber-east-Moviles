import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroChoferPageRoutingModule } from './registro-chofer-routing.module';

import { RegistroChoferPage } from './registro-chofer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroChoferPageRoutingModule,
    // BrowserModule /* or CommonModule */, 
   ReactiveFormsModule
  ],
  declarations: [RegistroChoferPage]
})
export class RegistroChoferPageModule {}
