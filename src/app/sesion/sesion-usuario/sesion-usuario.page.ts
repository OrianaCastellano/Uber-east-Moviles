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
];

restaurante: any=[{
  restaurante: "Siesta key",
  descripcion: "Social cocktails & american food" ,
  ubicacion: "Av.13A entre calles 72 y 73",
},{
  restaurante: "Gelart",
  descripcion: "El arte en helado" ,
  ubicacion: "Urb.Coromoto. Calle 171 con av.43",
},{
  restaurante: "Caste Pizza",
  descripcion: "Pizzas personales con diversos ingredientes" ,
  ubicacion: "Av.Padilla-Torres del Saladillo",
},{
  restaurante: "Romanos",
  descripcion: "Tu lugar perfecto para pizzas y frituras" ,
  ubicacion: "Cecilio Acosta, Las Lomas, La paragua",
},{
  restaurante: "El Cebú Restaurante",
  descripcion: "Carne en vara y a la parrilla" ,
  ubicacion: "Calle 76 con av 11",
},{
  restaurante: "Mozzarella Pizza",
  descripcion: "Pizzeria" ,
  ubicacion: "AV.3h la lago",
},{
  restaurante: "Chinitos Maracaibo",
  descripcion: "Restaurante de comida china" ,
  ubicacion: "Av. 4 bella vista entre 87-88",
},{
  restaurante: "La taqueria ",
  descripcion: "Comida mexicana" ,
  ubicacion: "Av. 9 entre calles 66 y 67 C.C Doña Casilda",
},{
  restaurante: "Parrilla Maracaibo",
  descripcion: "Las mejores promociones en parrilla" ,
  ubicacion: "Solo delivery",
},{
  restaurante: "Licores Ventarron",
  descripcion: "licoreria" ,
  ubicacion: "AV.25  con calle 64",
},
];
  constructor() { 
    
  }


  ngOnInit() {
  }

  


}
