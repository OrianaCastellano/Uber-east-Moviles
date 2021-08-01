import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesion-chofer',
  templateUrl: './sesion-chofer.page.html',
  styleUrls: ['./sesion-chofer.page.scss'],
})
export class SesionChoferPage implements OnInit {
  lista: string[];

  delivery: any=[
    {
      cliente: "Oriana",
      idfactura: 1,
    },{
      cliente: "Isabel",
      idfactura: 1,
    },{
      cliente: "Castellano",
      idfactura: 1,
    },{
      cliente: "Vivas",
      idfactura: 1,
    },{
      cliente: "Jeliana",
      idfactura: 1,
    },{
      cliente: "Parra",
      idfactura: 1,
    },

  ]
  constructor() { }

  ngOnInit() {
  }

}
