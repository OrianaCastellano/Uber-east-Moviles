import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MultilevelService } from 'src/app/multilevel.service';

@Component({
  selector: 'app-sesion-restaurante',
  templateUrl: './sesion-restaurante.page.html',
  styleUrls: ['./sesion-restaurante.page.scss'],
})
export class SesionRestaurantePage implements OnInit {
  lista: string[];
  productos_total: any = [];
  productos: any = [];
  buscador: string;
  slideOpts = { initialSlide: 1, speed: 400, autoplay: true };

  constructor(
    private router: Router,
    private multilevelservice: MultilevelService
  ) {}

  ngOnInit() {
    if (!localStorage.getItem('id')) {
      this.router.navigateByUrl('/sesion/restaurante');
    }
    let productos = JSON.parse(localStorage.getItem('Productos'));

    for (let i = 0; i < productos.length; i++) {
      this.productos.push(productos[i]);
    }
    this.productos_total = this.productos;
  }
}
