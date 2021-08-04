(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_misfavoritos_misfavoritos-usuario_misfavoritos-usuario_module_ts"],{

/***/ 2462:
/*!******************************************************************************************!*\
  !*** ./src/app/misfavoritos/misfavoritos-usuario/misfavoritos-usuario-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisfavoritosUsuarioPageRoutingModule": () => (/* binding */ MisfavoritosUsuarioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _misfavoritos_usuario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./misfavoritos-usuario.page */ 2622);




const routes = [
    {
        path: '',
        component: _misfavoritos_usuario_page__WEBPACK_IMPORTED_MODULE_0__.MisfavoritosUsuarioPage
    }
];
let MisfavoritosUsuarioPageRoutingModule = class MisfavoritosUsuarioPageRoutingModule {
};
MisfavoritosUsuarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MisfavoritosUsuarioPageRoutingModule);



/***/ }),

/***/ 8644:
/*!**********************************************************************************!*\
  !*** ./src/app/misfavoritos/misfavoritos-usuario/misfavoritos-usuario.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisfavoritosUsuarioPageModule": () => (/* binding */ MisfavoritosUsuarioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _misfavoritos_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./misfavoritos-usuario-routing.module */ 2462);
/* harmony import */ var _misfavoritos_usuario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misfavoritos-usuario.page */ 2622);







let MisfavoritosUsuarioPageModule = class MisfavoritosUsuarioPageModule {
};
MisfavoritosUsuarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _misfavoritos_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__.MisfavoritosUsuarioPageRoutingModule
        ],
        declarations: [_misfavoritos_usuario_page__WEBPACK_IMPORTED_MODULE_1__.MisfavoritosUsuarioPage]
    })
], MisfavoritosUsuarioPageModule);



/***/ }),

/***/ 2622:
/*!********************************************************************************!*\
  !*** ./src/app/misfavoritos/misfavoritos-usuario/misfavoritos-usuario.page.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisfavoritosUsuarioPage": () => (/* binding */ MisfavoritosUsuarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_misfavoritos_usuario_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./misfavoritos-usuario.page.html */ 1309);
/* harmony import */ var _misfavoritos_usuario_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misfavoritos-usuario.page.scss */ 3567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let MisfavoritosUsuarioPage = class MisfavoritosUsuarioPage {
    constructor() { }
    ngOnInit() {
    }
};
MisfavoritosUsuarioPage.ctorParameters = () => [];
MisfavoritosUsuarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-misfavoritos-usuario',
        template: _raw_loader_misfavoritos_usuario_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_misfavoritos_usuario_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MisfavoritosUsuarioPage);



/***/ }),

/***/ 3567:
/*!**********************************************************************************!*\
  !*** ./src/app/misfavoritos/misfavoritos-usuario/misfavoritos-usuario.page.scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".img {\n  width: 150px;\n}\n\nh1 {\n  text-align: center;\n  color: dark;\n  font-family: fantasy, \"Times New Roman\", Times, serif;\n}\n\nh1 .icon {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pc2Zhdm9yaXRvcy11c3VhcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFEQUFBO0FBRUo7O0FBREk7RUFDSSxrQkFBQTtBQUdSIiwiZmlsZSI6Im1pc2Zhdm9yaXRvcy11c3VhcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWd7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn1cclxuaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpkYXJrO1xyXG4gICAgZm9udC1mYW1pbHk6ZmFudGFzeSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIC5pY29ue1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 1309:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/misfavoritos/misfavoritos-usuario/misfavoritos-usuario.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header >\r\n  <ion-toolbar color=\"gray\">\r\n<ion-buttons>\r\n  <ion-img class=\"img\"src=\"../assets/logo.png\"></ion-img>\r\n  <ion-menu-button color=\"dark\" slot=\"end\"></ion-menu-button>\r\n  <ion-button  color=\"dark\" slot=\"end\"[routerLink]=\"['/sesion/usuario']\">\r\n    <ion-icon name=\"home\"></ion-icon></ion-button>\r\n</ion-buttons>\r\n<h1 color=\"dark\">Mis Restaurantes Favoritos</h1>\r\n</ion-toolbar>\r\n\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_misfavoritos_misfavoritos-usuario_misfavoritos-usuario_module_ts.js.map