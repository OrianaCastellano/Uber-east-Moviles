import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'sesion',
    loadChildren: () => import('./sesion/sesion.module').then( m => m.SesionPageModule)
  },
  {
    path: 'yo',
    loadChildren: () => import('./yo/yo.module').then( m => m.YOPageModule)
  },
  {
    path: 'menurestaurante/:id',
    loadChildren: () => import('./menurestaurante/menurestaurante.module').then( m => m.MenurestaurantePageModule)
  },
  {
    path: 'miscompras-usuario',
    loadChildren: () => import('./miscompras-usuario/miscompras-usuario.module').then( m => m.MiscomprasUsuarioPageModule)
  },
  {
    path: 'misfavoritos-usuario',
    loadChildren: () => import('./misfavoritos/misfavoritos-usuario/misfavoritos-usuario.module').then( m => m.MisfavoritosUsuarioPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
