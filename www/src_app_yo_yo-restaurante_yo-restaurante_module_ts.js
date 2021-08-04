(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_yo_yo-restaurante_yo-restaurante_module_ts"],{

/***/ 4932:
/*!********************************************************************!*\
  !*** ./src/app/yo/yo-restaurante/yo-restaurante-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YoRestaurantePageRoutingModule": () => (/* binding */ YoRestaurantePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _yo_restaurante_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yo-restaurante.page */ 1845);




const routes = [
    {
        path: '',
        component: _yo_restaurante_page__WEBPACK_IMPORTED_MODULE_0__.YoRestaurantePage
    }
];
let YoRestaurantePageRoutingModule = class YoRestaurantePageRoutingModule {
};
YoRestaurantePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], YoRestaurantePageRoutingModule);



/***/ }),

/***/ 5851:
/*!************************************************************!*\
  !*** ./src/app/yo/yo-restaurante/yo-restaurante.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YoRestaurantePageModule": () => (/* binding */ YoRestaurantePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _yo_restaurante_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yo-restaurante-routing.module */ 4932);
/* harmony import */ var _yo_restaurante_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yo-restaurante.page */ 1845);







let YoRestaurantePageModule = class YoRestaurantePageModule {
};
YoRestaurantePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _yo_restaurante_routing_module__WEBPACK_IMPORTED_MODULE_0__.YoRestaurantePageRoutingModule
        ],
        declarations: [_yo_restaurante_page__WEBPACK_IMPORTED_MODULE_1__.YoRestaurantePage]
    })
], YoRestaurantePageModule);



/***/ }),

/***/ 1845:
/*!**********************************************************!*\
  !*** ./src/app/yo/yo-restaurante/yo-restaurante.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YoRestaurantePage": () => (/* binding */ YoRestaurantePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_yo_restaurante_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./yo-restaurante.page.html */ 5365);
/* harmony import */ var _yo_restaurante_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yo-restaurante.page.scss */ 143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let YoRestaurantePage = class YoRestaurantePage {
    constructor() { }
    ngOnInit() {
    }
};
YoRestaurantePage.ctorParameters = () => [];
YoRestaurantePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-yo-restaurante',
        template: _raw_loader_yo_restaurante_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_yo_restaurante_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], YoRestaurantePage);



/***/ }),

/***/ 143:
/*!************************************************************!*\
  !*** ./src/app/yo/yo-restaurante/yo-restaurante.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h1 {\n  text-align: center;\n  color: dark;\n  font-family: fantasy, \"Times New Roman\", Times, serif;\n}\nh1 .icon {\n  margin-right: 10px;\n}\n.img {\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlvLXJlc3RhdXJhbnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFEQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0FBRVI7QUFDQTtFQUNJLFlBQUE7QUFFSiIsImZpbGUiOiJ5by1yZXN0YXVyYW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOmRhcms7XHJcbiAgICBmb250LWZhbWlseTpmYW50YXN5LCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgLmljb257XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbi5pbWd7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 5365:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/yo/yo-restaurante/yo-restaurante.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons>\r\n      <ion-img class=\"img\" src=\"../assets/logo.png\"></ion-img>\r\n      <ion-menu-button slot=\"end\" color=\"dark\"></ion-menu-button>\r\n      <ion-label color=\"dark\"></ion-label>\r\n      <ion-button  color=\"dark\" slot=\"end\"[routerLink]=\"['/sesion/restaurante']\">\r\n        <ion-icon name=\"home\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    </ion-toolbar>\r\n    \r\n</ion-header>\r\n\r\n<ion-content>\r\n  <h1 >\r\n    <ion-icon class=\"icon\"  color=\"dark\" name=\"person\"></ion-icon>CONFIGURACIÓN DE PERFIL\r\n  </h1>\r\n  <ion-item>\r\n  <ion-label >Nombre</ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label >Dirección</ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label >Latitud</ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label >Longitud</ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label >Correo Electronico</ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label >Foto</ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label >Contraseña</ion-label>\r\n</ion-item>\r\n</ion-content>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_yo_yo-restaurante_yo-restaurante_module_ts.js.map