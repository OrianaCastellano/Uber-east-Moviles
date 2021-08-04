(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_yo_yo-chofer_yo-chofer_module_ts"],{

/***/ 6466:
/*!**********************************************************!*\
  !*** ./src/app/yo/yo-chofer/yo-chofer-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YoChoferPageRoutingModule": () => (/* binding */ YoChoferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _yo_chofer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yo-chofer.page */ 1339);




const routes = [
    {
        path: '',
        component: _yo_chofer_page__WEBPACK_IMPORTED_MODULE_0__.YoChoferPage
    }
];
let YoChoferPageRoutingModule = class YoChoferPageRoutingModule {
};
YoChoferPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], YoChoferPageRoutingModule);



/***/ }),

/***/ 1239:
/*!**************************************************!*\
  !*** ./src/app/yo/yo-chofer/yo-chofer.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YoChoferPageModule": () => (/* binding */ YoChoferPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _yo_chofer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yo-chofer-routing.module */ 6466);
/* harmony import */ var _yo_chofer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yo-chofer.page */ 1339);







let YoChoferPageModule = class YoChoferPageModule {
};
YoChoferPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _yo_chofer_routing_module__WEBPACK_IMPORTED_MODULE_0__.YoChoferPageRoutingModule
        ],
        declarations: [_yo_chofer_page__WEBPACK_IMPORTED_MODULE_1__.YoChoferPage]
    })
], YoChoferPageModule);



/***/ }),

/***/ 1339:
/*!************************************************!*\
  !*** ./src/app/yo/yo-chofer/yo-chofer.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YoChoferPage": () => (/* binding */ YoChoferPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_yo_chofer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./yo-chofer.page.html */ 9938);
/* harmony import */ var _yo_chofer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yo-chofer.page.scss */ 2858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let YoChoferPage = class YoChoferPage {
    constructor() { }
    ngOnInit() {
    }
};
YoChoferPage.ctorParameters = () => [];
YoChoferPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-yo-chofer',
        template: _raw_loader_yo_chofer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_yo_chofer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], YoChoferPage);



/***/ }),

/***/ 2858:
/*!**************************************************!*\
  !*** ./src/app/yo/yo-chofer/yo-chofer.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h1 {\n  text-align: center;\n  color: dark;\n  font-family: fantasy, \"Times New Roman\", Times, serif;\n}\nh1 .icon {\n  margin-right: 10px;\n}\n.img {\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlvLWNob2Zlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxREFBQTtBQUNKO0FBQUk7RUFDSSxrQkFBQTtBQUVSO0FBQ0E7RUFDSSxZQUFBO0FBRUoiLCJmaWxlIjoieW8tY2hvZmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ZGFyaztcclxuICAgIGZvbnQtZmFtaWx5OmZhbnRhc3ksICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICAuaWNvbntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuLmltZ3tcclxuICAgIHdpZHRoOiAxNTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 9938:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/yo/yo-chofer/yo-chofer.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons>\r\n      <ion-img  class=\"img\"src=\"../assets/logo.png\"></ion-img>\r\n      <ion-menu-button slot=\"end\" color=\"dark\"></ion-menu-button>\r\n      <ion-button  color=\"dark\" slot=\"end\"[routerLink]=\"['/sesion/chofer']\">\r\n        <ion-icon name=\"home\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <h1 >\r\n    <ion-icon class=\"icon\"  color=\"dark\" name=\"person\"></ion-icon>CONFIGURACIÓN DE PERFIL\r\n  </h1>\r\n  <ion-item>\r\n  <ion-label >Nombre</ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label >Apellido</ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label >Correo Electronico </ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label >Tipo de Vehiculo</ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label >Marca de Vehiculo</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label >Matrícula del Vehiculo</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label >Número Telefónico</ion-label>\r\n  </ion-item>\r\n<ion-item>\r\n  <ion-label >Contraseña</ion-label>\r\n</ion-item>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_yo_yo-chofer_yo-chofer_module_ts.js.map