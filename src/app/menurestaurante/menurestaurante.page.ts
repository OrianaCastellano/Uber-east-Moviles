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
  establecimientos: string[];
  producto: any = [];

  constructor(
    private route: ActivatedRoute,
    public multilevelservice: MultilevelService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.multilevelservice
        .get_productByIdEsta(this.id)
        .subscribe((res: any) => {
          for (let row of res.data) {
            this.producto.push({
              id: row.p_id,
              titulo: row.p_name,
              descripcion: row.p_description,
              precio: row.p_price,
            });
          }
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
