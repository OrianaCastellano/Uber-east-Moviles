import { Component, OnInit } from '@angular/core';
import { MultilevelService } from 'src/app/multilevel.service';

@Component({
  selector: 'app-sesion-usuario',
  templateUrl: './sesion-usuario.page.html',
  styleUrls: ['./sesion-usuario.page.scss'],
})
export class SesionUsuarioPage implements OnInit {
  lista: string[];

  producto: any = [
    {
      titulo: 'Hamburguesa',
      restaurante: 'Siesta key',
      precio: '3$',
      ubicacion: 'Av.13A entre calles 72 y 73',
    },
    {
      titulo: 'Pizza Personal',
      restaurante: 'Caste Pizza',
      precio: '1$',
      ubicacion: 'Av.Padilla-Torres del Saladillo',
    },
    {
      titulo: 'Torta de Chocolate',
      restaurante: 'Gelart',
      precio: '5$',
      ubicacion: 'Urb.Coromoto. Calle 171 con av.43',
    },
  ];

  restaurante: any = [];
  constructor(private multilevelservice: MultilevelService) {}

  ngOnInit() {
    this.multilevelservice.get_establishment().subscribe((res: any) => {
      for (let row of res.data) {
        this.restaurante.push({
          id: row.e_id,
          nombre: row.e_name,
          descripcion: '',
          ubicacion: row.e_direction,
        });
      }
    });

    console.log(this.multilevelservice.users);
  }
}
