import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesion-restaurante',
  templateUrl: './sesion-restaurante.page.html',
  styleUrls: ['./sesion-restaurante.page.scss'],
})
export class SesionRestaurantePage implements OnInit {
 lista: string[];

  producto: any=[{
    titulo: "Hamburguesa",
    restaurante: "Siesta key",
    precio: "3$" ,
    ubicacion: "Av.13A entre calles 72 y 73",
  },{
    titulo: "Pizza Personal",
    restaurante: "Caste Pizza",
    precio: "1$" ,
    ubicacion: "Av.Padilla-Torres del Saladillo",},
    {
      titulo: "Torta de Chocolate",
      restaurante: "Gelart",
      precio: "5$" ,
      ubicacion: "Urb.Coromoto. Calle 171 con av.43",},
      {
        titulo: "Torta de Chocolate",
        restaurante: "Gelart",
        precio: "5$" ,
        ubicacion: "Urb.Coromoto. Calle 171 con av.43",}, 
        {
          titulo: "Torta de Chocolate",
          restaurante: "Gelart",
          precio: "5$" ,}
];
  constructor() { }

  ngOnInit() {
  }

}
