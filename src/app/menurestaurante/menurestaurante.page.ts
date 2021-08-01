import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MultilevelService } from '../multilevel.service';

@Component({
  selector: 'app-menurestaurante',
  templateUrl: './menurestaurante.page.html',
  styleUrls: ['./menurestaurante.page.scss'],
})
export class MenurestaurantePage implements OnInit, OnDestroy {
  id: number;
  private sub: any;

  lista: string[];

  producto: any=[{
    id: 1,
    titulo: "Hamburguesa",
    precio: 3 ,
    descripcion: "aaa",
  },{
    id:2,
    titulo: "Hamburguesa",
    precio: 3 ,
    descripcion: "aaa",
  },{
    id:3,
    titulo: "Hamburguesa",
    precio: 3,
    descripcion: "aaa",
  },{
    id:4,
    titulo: "Hamburguesa",
    precio: 3 ,
    descripcion: "aaa",
  },
];

  constructor(private route: ActivatedRoute,
    public multilevelservice: MultilevelService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
       console.log(this.id)
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }}