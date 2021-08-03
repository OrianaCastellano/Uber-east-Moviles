(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_sesion_sesion-usuario_sesion-usuario_module_ts"],{

/***/ 4256:
/*!************************************************************************!*\
  !*** ./src/app/sesion/sesion-usuario/sesion-usuario-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SesionUsuarioPageRoutingModule": () => (/* binding */ SesionUsuarioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _sesion_usuario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sesion-usuario.page */ 5592);




const routes = [
    {
        path: '',
        component: _sesion_usuario_page__WEBPACK_IMPORTED_MODULE_0__.SesionUsuarioPage
    }
];
let SesionUsuarioPageRoutingModule = class SesionUsuarioPageRoutingModule {
};
SesionUsuarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SesionUsuarioPageRoutingModule);



/***/ }),

/***/ 3707:
/*!****************************************************************!*\
  !*** ./src/app/sesion/sesion-usuario/sesion-usuario.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SesionUsuarioPageModule": () => (/* binding */ SesionUsuarioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _sesion_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sesion-usuario-routing.module */ 4256);
/* harmony import */ var _sesion_usuario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sesion-usuario.page */ 5592);







let SesionUsuarioPageModule = class SesionUsuarioPageModule {
};
SesionUsuarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sesion_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__.SesionUsuarioPageRoutingModule
        ],
        declarations: [_sesion_usuario_page__WEBPACK_IMPORTED_MODULE_1__.SesionUsuarioPage]
    })
], SesionUsuarioPageModule);



/***/ }),

/***/ 5592:
/*!**************************************************************!*\
  !*** ./src/app/sesion/sesion-usuario/sesion-usuario.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SesionUsuarioPage": () => (/* binding */ SesionUsuarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_sesion_usuario_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sesion-usuario.page.html */ 4942);
/* harmony import */ var _sesion_usuario_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sesion-usuario.page.scss */ 3576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let SesionUsuarioPage = class SesionUsuarioPage {
    constructor() {
        this.producto = [{
                titulo: "Hamburguesa",
                restaurante: "Siesta key",
                precio: "3$",
                ubicacion: "Av.13A entre calles 72 y 73",
            }, {
                titulo: "Pizza Personal",
                restaurante: "Caste Pizza",
                precio: "1$",
                ubicacion: "Av.Padilla-Torres del Saladillo",
            },
            {
                titulo: "Torta de Chocolate",
                restaurante: "Gelart",
                precio: "5$",
                ubicacion: "Urb.Coromoto. Calle 171 con av.43",
            },
        ];
        this.restaurante = [{
                restaurante: "Siesta key",
                descripcion: "Social cocktails & american food",
                ubicacion: "Av.13A entre calles 72 y 73",
            }, {
                restaurante: "Gelart",
                descripcion: "El arte en helado",
                ubicacion: "Urb.Coromoto. Calle 171 con av.43",
            }, {
                restaurante: "Caste Pizza",
                descripcion: "Pizzas personales con diversos ingredientes",
                ubicacion: "Av.Padilla-Torres del Saladillo",
            }, {
                restaurante: "Romanos",
                descripcion: "Tu lugar perfecto para pizzas y frituras",
                ubicacion: "Cecilio Acosta, Las Lomas, La paragua",
            }, {
                restaurante: "El Cebú Restaurante",
                descripcion: "Carne en vara y a la parrilla",
                ubicacion: "Calle 76 con av 11",
            }, {
                restaurante: "Mozzarella Pizza",
                descripcion: "Pizzeria",
                ubicacion: "AV.3h la lago",
            }, {
                restaurante: "Chinitos Maracaibo",
                descripcion: "Restaurante de comida china",
                ubicacion: "Av. 4 bella vista entre 87-88",
            }, {
                restaurante: "La taqueria ",
                descripcion: "Comida mexicana",
                ubicacion: "Av. 9 entre calles 66 y 67 C.C Doña Casilda",
            }, {
                restaurante: "Parrilla Maracaibo",
                descripcion: "Las mejores promociones en parrilla",
                ubicacion: "Solo delivery",
            }, {
                restaurante: "Licores Ventarron",
                descripcion: "licoreria",
                ubicacion: "AV.25  con calle 64",
            },
        ];
    }
    ngOnInit() {
    }
};
SesionUsuarioPage.ctorParameters = () => [];
SesionUsuarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-sesion-usuario',
        template: _raw_loader_sesion_usuario_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sesion_usuario_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SesionUsuarioPage);



/***/ }),

/***/ 3576:
/*!****************************************************************!*\
  !*** ./src/app/sesion/sesion-usuario/sesion-usuario.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h1 {\n  text-align: center;\n  color: dark;\n  font-family: fantasy, \"Times New Roman\", Times, serif;\n}\n\n.cartaproducto {\n  width: 300px;\n  margin: auto;\n}\n\n.cartarestaurante {\n  width: 300px;\n  margin: auto;\n}\n\nh2 {\n  text-align: center;\n  color: dark;\n  font-family: fantasy, \"Times New Roman\", Times, serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc2lvbi11c3VhcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFEQUFBO0FBQ0o7O0FBQ0E7RUFDRyxZQUFBO0VBQ0EsWUFBQTtBQUVIOztBQUNBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQztFQUNHLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFEQUFBO0FBRUoiLCJmaWxlIjoic2VzaW9uLXVzdWFyaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpkYXJrO1xyXG4gICAgZm9udC1mYW1pbHk6ZmFudGFzeSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufVxyXG4uY2FydGFwcm9kdWN0b3tcclxuICAgd2lkdGg6IDMwMHB4O1xyXG4gICBtYXJnaW46YXV0b1xyXG5cclxufVxyXG4uY2FydGFyZXN0YXVyYW50ZXtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjphdXRvXHJcbiBcclxuIH1cclxuIGgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ZGFyaztcclxuICAgIGZvbnQtZmFtaWx5OmZhbnRhc3ksICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn0iXX0= */");

/***/ }),

/***/ 4942:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sesion/sesion-usuario/sesion-usuario.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"gray\">\r\n<ion-buttons>\r\n  <ion-img src=\"../assets/logo.png\"></ion-img>\r\n  <ion-menu-button color=\"dark\" slot=\"end\"></ion-menu-button>\r\n</ion-buttons>\r\n\r\n</ion-toolbar>\r\n<ion-searchbar color=\"dark\"  showCancelButton animated placeholder=\"Buscar\"(ionchange)=\"buscar($event)\"></ion-searchbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-slides  [options]=\"slideOpts\">\r\n    <ion-slide>\r\n      <img src=\"../assets/foto11.jpg\" alt=\"\">\r\n    </ion-slide>\r\n    <ion-slide>\r\n          <img src=\"../assets/foto22.jpg\"/>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <img src=\"../assets/foto33.jpg\"/>\r\n    </ion-slide>\r\n  </ion-slides>\r\n  \r\n  <h1 >\r\n   MENÚ DEL DÍA\r\n  </h1>\r\n  <ion-grid>\r\n  <ion-row>\r\n    <ion-col *ngFor=\"let producto of producto\"  >\r\n      <ion-card class=\"cartaproducto\"> \r\n        <ion-card-header>\r\n          <ion-img class=\"fotoproducto\" src=\"../assets/fotopro.jpg\"></ion-img>\r\n          <ion-card-subtitle> {{producto.restaurante}}</ion-card-subtitle>\r\n          <ion-card-title>{{producto.titulo}}</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n              PRECIO:{{producto.precio}}  <br>\r\n              UBICACION: {{producto.ubicacion}}\r\n        </ion-card-content>\r\n        <ion-item>\r\n          <ion-icon name=\"\" slot=\"start\"></ion-icon>\r\n          <ion-button color=\"dark\" fill=\"outline\" slot=\"end\" >\r\n            Añadir al pedido<ion-icon name=\"cart\"></ion-icon></ion-button>\r\n        </ion-item>\r\n      </ion-card>\r\n    \r\n    </ion-col>\r\n    \r\n  </ion-row>\r\n</ion-grid>\r\n\r\n<h2 >\r\n RESTAURANTES\r\n </h2>\r\n <ion-grid>\r\n <ion-row>\r\n   <ion-col *ngFor=\"let restaurante of restaurante\"  >\r\n     <ion-card class=\"cartarestaurante\"> \r\n       <ion-card-header>\r\n         <ion-img class=\"fotorestaurante\" src=\"../assets/fotores.png\"></ion-img>\r\n         <ion-card-title>{{restaurante.nombre}}</ion-card-title>\r\n       </ion-card-header>\r\n       <ion-card-content>\r\n            DESCRIPCIÓN:{{restaurante.descripcion}}  <br>\r\n             UBICACION: {{restaurante.ubicacion}}\r\n       </ion-card-content>\r\n       <ion-item>\r\n         <ion-icon name=\"\" slot=\"start\"></ion-icon>\r\n         <ion-button color=\"dark\" fill=\"outline\" slot=\"end\" >\r\n          Ver Menú<ion-icon name=\"clipboard\"></ion-icon></ion-button>\r\n         <ion-icon name=\"heart\" color=\"danger\"></ion-icon>\r\n       </ion-item>\r\n     </ion-card>\r\n   \r\n   </ion-col>\r\n   \r\n </ion-row>\r\n</ion-grid>\r\n\r\n</ion-content>\r\n\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_sesion_sesion-usuario_sesion-usuario_module_ts.js.map