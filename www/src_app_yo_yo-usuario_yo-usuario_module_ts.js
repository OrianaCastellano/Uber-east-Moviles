(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_yo_yo-usuario_yo-usuario_module_ts"],{

/***/ 7968:
/*!************************************************************!*\
  !*** ./src/app/yo/yo-usuario/yo-usuario-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YoUsuarioPageRoutingModule": () => (/* binding */ YoUsuarioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _yo_usuario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yo-usuario.page */ 554);




const routes = [
    {
        path: '',
        component: _yo_usuario_page__WEBPACK_IMPORTED_MODULE_0__.YoUsuarioPage
    }
];
let YoUsuarioPageRoutingModule = class YoUsuarioPageRoutingModule {
};
YoUsuarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], YoUsuarioPageRoutingModule);



/***/ }),

/***/ 1484:
/*!****************************************************!*\
  !*** ./src/app/yo/yo-usuario/yo-usuario.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YoUsuarioPageModule": () => (/* binding */ YoUsuarioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _yo_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yo-usuario-routing.module */ 7968);
/* harmony import */ var _yo_usuario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yo-usuario.page */ 554);







let YoUsuarioPageModule = class YoUsuarioPageModule {
};
YoUsuarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _yo_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__.YoUsuarioPageRoutingModule
        ],
        declarations: [_yo_usuario_page__WEBPACK_IMPORTED_MODULE_1__.YoUsuarioPage]
    })
], YoUsuarioPageModule);



/***/ }),

/***/ 554:
/*!**************************************************!*\
  !*** ./src/app/yo/yo-usuario/yo-usuario.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YoUsuarioPage": () => (/* binding */ YoUsuarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_yo_usuario_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./yo-usuario.page.html */ 2881);
/* harmony import */ var _yo_usuario_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yo-usuario.page.scss */ 5701);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let YoUsuarioPage = class YoUsuarioPage {
    constructor() { }
    ngOnInit() {
    }
};
YoUsuarioPage.ctorParameters = () => [];
YoUsuarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-yo-usuario',
        template: _raw_loader_yo_usuario_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_yo_usuario_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], YoUsuarioPage);



/***/ }),

/***/ 5701:
/*!****************************************************!*\
  !*** ./src/app/yo/yo-usuario/yo-usuario.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h1 {\n  text-align: center;\n  color: dark;\n  font-family: fantasy, \"Times New Roman\", Times, serif;\n}\nh1 .icon {\n  margin-right: 10px;\n}\n.img {\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlvLXVzdWFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EscURBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7QUFFUjtBQUNBO0VBQ0ksWUFBQTtBQUVKIiwiZmlsZSI6InlvLXVzdWFyaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpkYXJrO1xyXG4gICAgZm9udC1mYW1pbHk6ZmFudGFzeSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIC5pY29ue1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufVxyXG4uaW1ne1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59Il19 */");

/***/ }),

/***/ 2881:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/yo/yo-usuario/yo-usuario.page.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"gray\">\r\n    <ion-buttons>\r\n      <ion-img  class=\"img\"src=\"../assets/logo.png\"></ion-img>\r\n      <ion-menu-button slot=\"end\"></ion-menu-button>\r\n      <ion-button  color=\"dark\" slot=\"end\"[routerLink]=\"['/sesion/usuario']\">\r\n        <ion-icon name=\"home\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    </ion-toolbar>\r\n    \r\n</ion-header>\r\n\r\n<ion-content>\r\n  <h1 >\r\n    <ion-icon class=\"icon\"  color=\"dark\" name=\"person\"></ion-icon>CONFIGURACIÓN DE PERFIL\r\n  </h1>\r\n  <ion-item>\r\n  <ion-label >Nombre</ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label >Apellido</ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label >Correo Electronico </ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label >Dirección</ion-label>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-label >Contraseña</ion-label>\r\n</ion-item>\r\n</ion-content>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_yo_yo-usuario_yo-usuario_module_ts.js.map