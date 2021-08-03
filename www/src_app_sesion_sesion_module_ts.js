(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_sesion_sesion_module_ts"],{

/***/ 2387:
/*!*************************************************!*\
  !*** ./src/app/sesion/sesion-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SesionPageRoutingModule": () => (/* binding */ SesionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const routes = [
    {
        path: 'usuario',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sesion_sesion-usuario_sesion-usuario_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sesion-usuario/sesion-usuario.module */ 3707)).then(m => m.SesionUsuarioPageModule)
    },
    {
        path: 'restaurante',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sesion_sesion-restaurante_sesion-restaurante_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sesion-restaurante/sesion-restaurante.module */ 5003)).then(m => m.SesionRestaurantePageModule)
    }
];
let SesionPageRoutingModule = class SesionPageRoutingModule {
};
SesionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    })
], SesionPageRoutingModule);



/***/ }),

/***/ 7236:
/*!*****************************************!*\
  !*** ./src/app/sesion/sesion.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SesionPageModule": () => (/* binding */ SesionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _sesion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sesion-routing.module */ 2387);
/* harmony import */ var _sesion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sesion.page */ 8210);







let SesionPageModule = class SesionPageModule {
    constructor() {
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
            autoplay: true
        };
    }
};
SesionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sesion_routing_module__WEBPACK_IMPORTED_MODULE_0__.SesionPageRoutingModule
        ],
        declarations: [_sesion_page__WEBPACK_IMPORTED_MODULE_1__.SesionPage]
    })
], SesionPageModule);



/***/ }),

/***/ 8210:
/*!***************************************!*\
  !*** ./src/app/sesion/sesion.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SesionPage": () => (/* binding */ SesionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_sesion_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sesion.page.html */ 3171);
/* harmony import */ var _sesion_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sesion.page.scss */ 9871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let SesionPage = class SesionPage {
    constructor() {
    }
    ngOnInit() {
    }
};
SesionPage.ctorParameters = () => [];
SesionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-sesion',
        template: _raw_loader_sesion_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sesion_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SesionPage);



/***/ }),

/***/ 9871:
/*!*****************************************!*\
  !*** ./src/app/sesion/sesion.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h1 {\n  text-align: center;\n  color: dark;\n  font-family: fantasy, \"Times New Roman\", Times, serif;\n}\n\n.cartaproducto {\n  width: 300px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxREFBQTtBQUNKOztBQUNBO0VBQ0csWUFBQTtFQUNBLFlBQUE7QUFFSCIsImZpbGUiOiJzZXNpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpkYXJrO1xyXG4gICAgZm9udC1mYW1pbHk6ZmFudGFzeSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufVxyXG4uY2FydGFwcm9kdWN0b3tcclxuICAgd2lkdGg6IDMwMHB4O1xyXG4gICBtYXJnaW46YXV0b1xyXG5cclxufSJdfQ== */");

/***/ }),

/***/ 3171:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sesion/sesion.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("");

/***/ })

}]);
//# sourceMappingURL=src_app_sesion_sesion_module_ts.js.map