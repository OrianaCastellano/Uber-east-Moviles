import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationPage } from './registration.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationPage
  },
  {
    path: 'chofer',
    loadChildren: () => import('./registro-chofer/registro-chofer.module').then( m => m.RegistroChoferPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'restaurante',
    loadChildren: () => import('./registro-restaurante/registro-restaurante.module').then( m => m.RegistroRestaurantePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationPageRoutingModule {}
