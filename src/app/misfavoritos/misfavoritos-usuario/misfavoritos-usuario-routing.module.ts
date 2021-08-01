import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisfavoritosUsuarioPage } from './misfavoritos-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: MisfavoritosUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisfavoritosUsuarioPageRoutingModule {}
