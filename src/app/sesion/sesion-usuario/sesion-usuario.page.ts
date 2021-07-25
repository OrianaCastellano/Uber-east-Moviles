import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesion-usuario',
  templateUrl: './sesion-usuario.page.html',
  styleUrls: ['./sesion-usuario.page.scss'],
})
export class SesionUsuarioPage implements OnInit {

  lista: string[];

  producto: any=[{
    titulo: "PATERNIDAD",
    restaurante: "Pelicula Clase B",
    precio: "3$" ,
    ubicacion: "abc",
  

  }];
  constructor() { 
    
  }


  ngOnInit() {
  }

  


}
