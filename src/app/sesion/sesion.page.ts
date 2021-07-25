import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {

  lista: string[];

  peliculas: any=[{
    titulo: "PATERNIDAD",
    clase: "Pelicula Clase B",
    descripcion: "Un papa novato y viudo les hace frente a las dudas, los miedos, el dolor y los pañales sucios al criar a su hija por su cuenta, inspirada en una historia real " ,
  genero: "basada en la vida real, basada en libros, drama.",
  duracion: "1hr 50min",
  elenco:"Kevin Hart, Alfre Woodard, Lil Rel Howery, entre otros ",
  year: "2021",
  produccion: "Netflix",

  }, {
    titulo: "CHICASKATER",
    clase: "Pelicula Clase A",
    descripcion: "Despues de descubrir una pasión transformada por el skate, una joven de la india rural debera sortear distintos desafios para alcanzar su sueño de competir  " ,
  genero: "drama, de la india, social",
  duracion: "1hr 49min",
  elenco:"Rachel Saanchita Gupta, Amy Maghera, Shafin  Patel, entre otros ",
  year: "2021",
  produccion: "Netflix",
  }, {
    
  titulo: "OHANA UN MAGNIFICO TESORO",
  clase: " Pelicula Clase A",
  descripcion: "Mientras veranean en oahu, dos hermanos de brooklyn se conectan con su ascendencia hawaiana y con su familia en una misión audaz para recuperar un tesoro perdido." ,
genero: "infantil, familiar y de comedia  ",
duracion: " 2hrs 3min",
elenco:"Kea peahu, alex aiono, lindsay watson, entre otras. ",
year: "2021",
produccion: "Netflix",
  }, 
{
  titulo: "VIDAS DE PAPEL",
  clase: " Pelicula Clase C",
  descripcion: "En las calles de estambul, un manipulador de desechos enfermo le abre las puertas a un niño abandonado que lo hace enfrentar traumas de su propio pasado " ,
genero: "de turquía, drama, melodrama ",
duracion: "1hr 37min",
elenco:"Cagatay Ulusoy, Emir Ali Dogrul, Ersin Arici, entre otros  ",
year: "2021",
produccion: "Netflix",
}];
  constructor() { 
    
  }


  ngOnInit() {
  }

  


}