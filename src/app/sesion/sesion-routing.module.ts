import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SesionPage } from './sesion.page';

const routes: Routes = [
  {
    path: 'usuario',
    loadChildren: () => import('./sesion-usuario/sesion-usuario.module').then( m => m.SesionUsuarioPageModule)
  },
  {
    path: 'restaurante',
    loadChildren: () => import('./sesion-restaurante/sesion-restaurante.module').then( m => m.SesionRestaurantePageModule)
  },
  {
    path: 'chofer',
    loadChildren: () => import('./sesion-chofer/sesion-chofer.module').then( m => m.SesionChoferPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SesionPageRoutingModule {}
