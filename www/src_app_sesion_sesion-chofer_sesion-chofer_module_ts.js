(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_sesion_sesion-chofer_sesion-chofer_module_ts"],{

/***/ 4652:
/*!**********************************************************************!*\
  !*** ./src/app/sesion/sesion-chofer/sesion-chofer-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SesionChoferPageRoutingModule": () => (/* binding */ SesionChoferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _sesion_chofer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sesion-chofer.page */ 979);




const routes = [
    {
        path: '',
        component: _sesion_chofer_page__WEBPACK_IMPORTED_MODULE_0__.SesionChoferPage
    }
];
let SesionChoferPageRoutingModule = class SesionChoferPageRoutingModule {
};
SesionChoferPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SesionChoferPageRoutingModule);



/***/ }),

/***/ 9359:
/*!**************************************************************!*\
  !*** ./src/app/sesion/sesion-chofer/sesion-chofer.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SesionChoferPageModule": () => (/* binding */ SesionChoferPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _sesion_chofer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sesion-chofer-routing.module */ 4652);
/* harmony import */ var _sesion_chofer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sesion-chofer.page */ 979);







let SesionChoferPageModule = class SesionChoferPageModule {
};
SesionChoferPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sesion_chofer_routing_module__WEBPACK_IMPORTED_MODULE_0__.SesionChoferPageRoutingModule
        ],
        declarations: [_sesion_chofer_page__WEBPACK_IMPORTED_MODULE_1__.SesionChoferPage]
    })
], SesionChoferPageModule);



/***/ }),

/***/ 979:
/*!************************************************************!*\
  !*** ./src/app/sesion/sesion-chofer/sesion-chofer.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SesionChoferPage": () => (/* binding */ SesionChoferPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_sesion_chofer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sesion-chofer.page.html */ 1698);
/* harmony import */ var _sesion_chofer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sesion-chofer.page.scss */ 3678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let SesionChoferPage = class SesionChoferPage {
    constructor() {
        this.delivery = [
            {
                cliente: "Oriana",
                idfactura: 1,
            }, {
                cliente: "Isabel",
                idfactura: 1,
            }, {
                cliente: "Castellano",
                idfactura: 1,
            }, {
                cliente: "Vivas",
                idfactura: 1,
            }, {
                cliente: "Jeliana",
                idfactura: 1,
            }, {
                cliente: "Parra",
                idfactura: 1,
            },
        ];
    }
    ngOnInit() {
    }
};
SesionChoferPage.ctorParameters = () => [];
SesionChoferPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-sesion-chofer',
        template: _raw_loader_sesion_chofer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sesion_chofer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SesionChoferPage);



/***/ }),

/***/ 3678:
/*!**************************************************************!*\
  !*** ./src/app/sesion/sesion-chofer/sesion-chofer.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h1 {\n  text-align: center;\n  color: dark;\n  font-family: fantasy;\n}\n\n.img {\n  width: 150px;\n}\n\n.cartaproducto {\n  width: 300px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc2lvbi1jaG9mZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFBQTtFQUNHLFlBQUE7RUFDQSxZQUFBO0FBR0giLCJmaWxlIjoic2VzaW9uLWNob2Zlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOmRhcms7XHJcbiAgICBmb250LWZhbWlseTpmYW50YXN5O1xyXG59XHJcbi5pbWd7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn1cclxuLmNhcnRhcHJvZHVjdG97XHJcbiAgIHdpZHRoOiAzMDBweDtcclxuICAgbWFyZ2luOmF1dG9cclxuXHJcbn0iXX0= */");

/***/ }),

/***/ 1698:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sesion/sesion-chofer/sesion-chofer.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons>\r\n      <ion-img class=\"img\" src=\"../assets/logo.png\"></ion-img>\r\n      <ion-menu-button color=\"dark\" slot=\"end\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <h1>\r\n    TUS PEDIDOS POR ENTREGAR\r\n    <ion-icon class=\"icon\" color=\"dark\" name=\"clipboard\"></ion-icon>\r\n  </h1>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col *ngFor=\"let delivery of  delivery \">\r\n        <ion-card class=\"cartaproducto\">\r\n          <ion-card-header>\r\n            <ion-card-title\r\n              >Nombre Cliente: {{delivery.cliente}}</ion-card-title\r\n            >\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            Numero de Factura: {{delivery.idfactura}}\r\n          </ion-card-content>\r\n          <ion-item>\r\n            <ion-button color=\"dark\" fill=\"outline\" slot=\"end\"\r\n              ><ion-icon name=\"checkbox-outline\" slot=\"start\"></ion-icon>Aceptar\r\n              Delivery</ion-button\r\n            >\r\n          </ion-item>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_sesion_sesion-chofer_sesion-chofer_module_ts.js.map