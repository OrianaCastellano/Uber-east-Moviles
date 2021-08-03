(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_sesion_sesion-restaurante_sesion-restaurante_module_ts"],{

/***/ 2178:
/*!********************************************************************************!*\
  !*** ./src/app/sesion/sesion-restaurante/sesion-restaurante-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SesionRestaurantePageRoutingModule": () => (/* binding */ SesionRestaurantePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _sesion_restaurante_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sesion-restaurante.page */ 5895);




const routes = [
    {
        path: '',
        component: _sesion_restaurante_page__WEBPACK_IMPORTED_MODULE_0__.SesionRestaurantePage
    }
];
let SesionRestaurantePageRoutingModule = class SesionRestaurantePageRoutingModule {
};
SesionRestaurantePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SesionRestaurantePageRoutingModule);



/***/ }),

/***/ 5003:
/*!************************************************************************!*\
  !*** ./src/app/sesion/sesion-restaurante/sesion-restaurante.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SesionRestaurantePageModule": () => (/* binding */ SesionRestaurantePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _sesion_restaurante_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sesion-restaurante-routing.module */ 2178);
/* harmony import */ var _sesion_restaurante_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sesion-restaurante.page */ 5895);







let SesionRestaurantePageModule = class SesionRestaurantePageModule {
};
SesionRestaurantePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sesion_restaurante_routing_module__WEBPACK_IMPORTED_MODULE_0__.SesionRestaurantePageRoutingModule
        ],
        declarations: [_sesion_restaurante_page__WEBPACK_IMPORTED_MODULE_1__.SesionRestaurantePage]
    })
], SesionRestaurantePageModule);



/***/ }),

/***/ 5895:
/*!**********************************************************************!*\
  !*** ./src/app/sesion/sesion-restaurante/sesion-restaurante.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SesionRestaurantePage": () => (/* binding */ SesionRestaurantePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_sesion_restaurante_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sesion-restaurante.page.html */ 7765);
/* harmony import */ var _sesion_restaurante_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sesion-restaurante.page.scss */ 2286);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let SesionRestaurantePage = class SesionRestaurantePage {
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
            {
                titulo: "Torta de Chocolate",
                restaurante: "Gelart",
                precio: "5$",
                ubicacion: "Urb.Coromoto. Calle 171 con av.43",
            },
            {
                titulo: "Torta de Chocolate",
                restaurante: "Gelart",
                precio: "5$",
            }
        ];
    }
    ngOnInit() {
    }
};
SesionRestaurantePage.ctorParameters = () => [];
SesionRestaurantePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-sesion-restaurante',
        template: _raw_loader_sesion_restaurante_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sesion_restaurante_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SesionRestaurantePage);



/***/ }),

/***/ 2286:
/*!************************************************************************!*\
  !*** ./src/app/sesion/sesion-restaurante/sesion-restaurante.page.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h1 {\n  text-align: center;\n  color: dark;\n  font-family: fantasy, \"Times New Roman\", Times, serif;\n}\n\n.cartaproducto {\n  width: 300px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc2lvbi1yZXN0YXVyYW50ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxREFBQTtBQUNKOztBQUNBO0VBQ0csWUFBQTtFQUNBLFlBQUE7QUFFSCIsImZpbGUiOiJzZXNpb24tcmVzdGF1cmFudGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpkYXJrO1xyXG4gICAgZm9udC1mYW1pbHk6ZmFudGFzeSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufVxyXG4uY2FydGFwcm9kdWN0b3tcclxuICAgd2lkdGg6IDMwMHB4O1xyXG4gICBtYXJnaW46YXV0b1xyXG5cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 7765:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sesion/sesion-restaurante/sesion-restaurante.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n  <ion-buttons>\r\n    <ion-img src=\"../assets/logo.png\"></ion-img>\r\n    <ion-menu-button color=\"dark\" slot=\"end\"></ion-menu-button>\r\n  </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n  \r\n  <h1 >\r\n      TU MENÚ   <ion-icon class=\"icon\"  color=\"dark\" name=\"clipboard\"></ion-icon>\r\n   </h1>\r\n   <ion-grid>\r\n   <ion-row>\r\n     <ion-col *ngFor=\"let producto of producto\"  >\r\n       <ion-card class=\"cartaproducto\"> \r\n         <ion-card-header>\r\n           <ion-img class=\"fotoproducto\" src=\"../assets/fotopro.jpg\"></ion-img>\r\n           <ion-card-subtitle> {{producto.restaurante}}</ion-card-subtitle>\r\n           <ion-card-title>{{producto.titulo}}</ion-card-title>\r\n         </ion-card-header>\r\n         <ion-card-content>\r\n               PRECIO:{{producto.precio}}  <br>\r\n               UBICACION: {{producto.ubicacion}}\r\n         </ion-card-content>\r\n         <ion-item>\r\n           <ion-icon name=\"create\" slot=\"start\"></ion-icon>\r\n           <ion-button color=\"dark\" fill=\"outline\" slot=\"end\" >activo/inactivo<ion-icon></ion-icon></ion-button>\r\n         </ion-item>\r\n       </ion-card>\r\n     \r\n     </ion-col>\r\n     \r\n   </ion-row>\r\n </ion-grid>  \r\n\r\n ");

/***/ })

}]);
//# sourceMappingURL=src_app_sesion_sesion-restaurante_sesion-restaurante_module_ts.js.map