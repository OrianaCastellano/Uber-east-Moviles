import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YoUsuarioPage } from './yo-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: YoUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoUsuarioPageRoutingModule {}
