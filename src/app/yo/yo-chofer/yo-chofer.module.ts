import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YoChoferPageRoutingModule } from './yo-chofer-routing.module';

import { YoChoferPage } from './yo-chofer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YoChoferPageRoutingModule
  ],
  declarations: [YoChoferPage]
})
export class YoChoferPageModule {}
