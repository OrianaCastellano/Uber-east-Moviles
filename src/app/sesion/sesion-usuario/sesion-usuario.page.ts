import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesion-usuario',
  templateUrl: './sesion-usuario.page.html',
  styleUrls: ['./sesion-usuario.page.scss'],
})
export class SesionUsuarioPage implements OnInit {

  lista: string[];

  producto: any=[{
    titulo: "Hamburguesa",
    restaurante: "Siesta key",
    precio: "3$" ,
    ubicacion: "Avenida",
  },{
    titulo: "Empanadas",
    restaurante: "Pastelitos",
    precio: "4$" ,
    ubicacion: "Avenida",},
    {
      titulo: "Hamburguesa",
      restaurante: "Siesta key",
      precio: "3$" ,
      ubicacion: "Avenida",},
];

restaurante: any=[{
  nombre: "Hamburguesa",
  restaurante: "Siesta key",
  descripcion: "3$" ,
  ubicacion: "Avenida",
},{
  nombre: "Hamburguesa",
  restaurante: "Siesta key",
  descripcion: "3$" ,
  ubicacion: "Avenida",
},{
  nombre: "Hamburguesa",
  restaurante: "Siesta key",
  descripcion: "3$" ,
  ubicacion: "Avenida",
},{
  nombre: "Hamburguesa",
  restaurante: "Siesta key",
  descripcion: "3$" ,
  ubicacion: "Avenida",
},{
  nombre: "Hamburguesa",
  restaurante: "Siesta key",
  descripcion: "3$" ,
  ubicacion: "Avenida",
},{
  nombre: "Hamburguesa",
  restaurante: "Siesta key",
  descripcion: "3$" ,
  ubicacion: "Avenida",
},{
  nombre: "Hamburguesa",
  restaurante: "Siesta key",
  descripcion: "3$" ,
  ubicacion: "Avenida",
},{
  nombre: "Hamburguesa",
  restaurante: "Siesta key",
  descripcion: "3$" ,
  ubicacion: "Avenida",
},{
  nombre: "Hamburguesa",
  restaurante: "Siesta key",
  descripcion: "3$" ,
  ubicacion: "Avenida",
},{
  nombre: "Hamburguesa",
  restaurante: "Siesta key",
  descripcion: "3$" ,
  ubicacion: "Avenida",
},{
  nombre: "Hamburguesa",
  restaurante: "Siesta key",
  descripcion: "3$" ,
  ubicacion: "Avenida",
},{
  nombre: "Hamburguesa",
  restaurante: "Siesta key",
  descripcion: "3$" ,
  ubicacion: "Avenida",
},
];
  constructor() { 
    
  }


  ngOnInit() {
  }

  


}
