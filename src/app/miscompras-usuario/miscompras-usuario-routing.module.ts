import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiscomprasUsuarioPage } from './miscompras-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: MiscomprasUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscomprasUsuarioPageRoutingModule {}
