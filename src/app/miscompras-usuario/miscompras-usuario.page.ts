import { Component, OnInit } from '@angular/core';
import { MultilevelService } from '../multilevel.service';

@Component({
  selector: 'app-miscompras-usuario',
  templateUrl: './miscompras-usuario.page.html',
  styleUrls: ['./miscompras-usuario.page.scss'],
})
export class MiscomprasUsuarioPage implements OnInit {
 pedidos: any=[];
  constructor( public multilevelservice: MultilevelService,) { }

  ngOnInit(){
    this.pedidos= this.multilevelservice.pedidos;
  }

}
