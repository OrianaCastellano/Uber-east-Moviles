import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MultilevelService {

  url: string = 'http://localhost:3000/';
  users: any = {}
  pedidos: any = [];
  constructor(private http: HttpClient) {
    console.log("Multiservice")
  }

  get_movies() {

    return this.http.get(this.url + 'movies/allmovies');

  }
  setusers(users) { this.users = users }
  agregarPedido(pedido) {
    let index = this.pedidos.findIndex(p => {
      return p.id == pedido.id
    })
    if (index != -1) {
      this.pedidos[index].cantidad += 1;
    } else {
      pedido.cantidad = 1;
      this.pedidos.push(pedido);
    }
    console.log(this.pedidos);
  }
  borrarPedido(id) {
    this.pedidos = this.pedidos.filter(pedido => { pedido.id != id });
  }
}
