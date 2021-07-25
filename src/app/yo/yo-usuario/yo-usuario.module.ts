import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YoUsuarioPageRoutingModule } from './yo-usuario-routing.module';

import { YoUsuarioPage } from './yo-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YoUsuarioPageRoutingModule
  ],
  declarations: [YoUsuarioPage]
})
export class YoUsuarioPageModule {}
