import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'usuario',
    loadChildren: () => import('./login-usuario/login-usuario.module').then( m => m.LoginUsuarioPageModule)
  },
  {
    path: 'chofer',
    loadChildren: () => import('./login-chofer/login-chofer.module').then( m => m.LoginChoferPageModule)
  },
  {
    path: 'restaurante',
    loadChildren: () => import('./login-restaurante/login-restaurante.module').then( m => m.LoginRestaurantePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
