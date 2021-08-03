import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MultilevelService {
  url: string = 'http://localhost:3002/api/v1';
  users: any = {};
  pedidos: any = [];
  total: number = 0;
  constructor(private http: HttpClient) {
    console.log('Multiservice');
  }

  setusers(users) {
    this.users = users;
  }
  agregarPedido(pedido) {
    let index = this.pedidos.findIndex((p) => {
      return p.id == pedido.id;
    });
    if (index != -1) {
      this.pedidos[index].cantidad += 1;
    } else {
      pedido.cantidad = 1;
      this.pedidos.push(pedido);
    }
    console.log(this.pedidos);
    this.calcularTotal();
  }
  borrarPedido(id) {
    console.log(this.pedidos);
    this.pedidos = this.pedidos.filter((pedido) => {
      return pedido.id != id;
    });
    console.log(id);
    this.calcularTotal();
  }
  calcularTotal() {
    let total = 0;
    for (let pedido of this.pedidos) {
      total += pedido.cantidad * pedido.precio;
    }
    this.total = total;
    console.log(this.total);
  }

  get_establishment() {
    return this.http.get(this.url + '/establishment/getEstablishments');
  }

  get_productByIdEsta(id) {
    return this.http.get(
      this.url + '/product/getProductsByIdEstablishment/' + id
    );
  }
  register(form) {
    form = JSON.stringify(form);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    let options = { body: form, headers };
    console.log(options);
    return this.http.post(this.url + `/user/signup`, form, options);
  }

  registerRest(form) {
    form = JSON.stringify(form);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    let options = { body: form, headers };
    console.log(options);
    return this.http.post(this.url + `/establishment/signup`, form, options);
  }
  registerConductor(form) {
    form = JSON.stringify(form);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    let options = { body: form, headers };
    console.log(options);
    return this.http.post(this.url + `/driver/signup`, form, options);
  }

  loginConductor(form) {
    form = JSON.stringify(form);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    let options = { body: form, headers };
    console.log(options);
    return this.http.post(this.url + `/driver/signup`, form, options);
  }

  loginUser(form) {
    form = JSON.stringify(form);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    let options = { body: form, headers };
    console.log(options);
    return this.http.post(this.url + `/user/signin`, form, options);
  }

  loginChofer(form) {
    form = JSON.stringify(form);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    let options = { body: form, headers };
    console.log(options);
    return this.http.post(this.url + `/driver/signin`, form, options);
  }

  loginRest(form) {
    form = JSON.stringify(form);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    let options = { body: form, headers };
    console.log(options);
    return this.http.post(this.url + `/establishment/signin`, form, options);
  }
}
