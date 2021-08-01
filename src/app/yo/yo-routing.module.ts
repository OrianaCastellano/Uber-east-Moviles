import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'usuario',
    loadChildren: () => import('./yo-usuario/yo-usuario.module').then( m => m.YoUsuarioPageModule)
  },
  {
    path: 'restaurante',
    loadChildren: () => import('./yo-restaurante/yo-restaurante.module').then( m => m.YoRestaurantePageModule)
  },
  {
    path: 'chofer',
    loadChildren: () => import('./yo-chofer/yo-chofer.module').then( m => m.YoChoferPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YOPageRoutingModule {}
