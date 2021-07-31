import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiscomprasUsuarioPageRoutingModule } from './miscompras-usuario-routing.module';

import { MiscomprasUsuarioPage } from './miscompras-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiscomprasUsuarioPageRoutingModule
  ],
  declarations: [MiscomprasUsuarioPage]
})
export class MiscomprasUsuarioPageModule {}
