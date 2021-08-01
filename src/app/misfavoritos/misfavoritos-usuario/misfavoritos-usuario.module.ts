import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisfavoritosUsuarioPageRoutingModule } from './misfavoritos-usuario-routing.module';

import { MisfavoritosUsuarioPage } from './misfavoritos-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisfavoritosUsuarioPageRoutingModule
  ],
  declarations: [MisfavoritosUsuarioPage]
})
export class MisfavoritosUsuarioPageModule {}
