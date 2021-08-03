(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_registration_registro-restaurante_registro-restaurante_module_ts"],{

/***/ 87:
/*!******************************************************************************************!*\
  !*** ./src/app/registration/registro-restaurante/registro-restaurante-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroRestaurantePageRoutingModule": () => (/* binding */ RegistroRestaurantePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _registro_restaurante_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-restaurante.page */ 5006);




const routes = [
    {
        path: '',
        component: _registro_restaurante_page__WEBPACK_IMPORTED_MODULE_0__.RegistroRestaurantePage
    }
];
let RegistroRestaurantePageRoutingModule = class RegistroRestaurantePageRoutingModule {
};
RegistroRestaurantePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroRestaurantePageRoutingModule);



/***/ }),

/***/ 1817:
/*!**********************************************************************************!*\
  !*** ./src/app/registration/registro-restaurante/registro-restaurante.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroRestaurantePageModule": () => (/* binding */ RegistroRestaurantePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _registro_restaurante_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-restaurante-routing.module */ 87);
/* harmony import */ var _registro_restaurante_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-restaurante.page */ 5006);







let RegistroRestaurantePageModule = class RegistroRestaurantePageModule {
};
RegistroRestaurantePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registro_restaurante_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroRestaurantePageRoutingModule,
            // BrowserModule /* or CommonModule */, 
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_registro_restaurante_page__WEBPACK_IMPORTED_MODULE_1__.RegistroRestaurantePage]
    })
], RegistroRestaurantePageModule);



/***/ }),

/***/ 5006:
/*!********************************************************************************!*\
  !*** ./src/app/registration/registro-restaurante/registro-restaurante.page.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroRestaurantePage": () => (/* binding */ RegistroRestaurantePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_registro_restaurante_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registro-restaurante.page.html */ 4094);
/* harmony import */ var _registro_restaurante_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-restaurante.page.scss */ 8034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);






let RegistroRestaurantePage = class RegistroRestaurantePage {
    constructor(router, fb) {
        this.router = router;
        this.fb = fb;
    }
    ngOnInit() {
        this.credentials = this.fb.group({
            Email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            direction: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            latitude: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            longitude: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            foto: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            firstname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
    }
    Register() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigateByUrl("/login/restaurante", { replaceUrl: true });
            console.log(this.credentials.value);
        });
    }
    get Email() {
        return this.credentials.get("Email");
    }
    get password() {
        return this.credentials.get("password");
    }
    get firstname() {
        return this.credentials.get("firstname");
    }
    get name() {
        return this.credentials.get("name");
    }
};
RegistroRestaurantePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
RegistroRestaurantePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-registro-restaurante',
        template: _raw_loader_registro_restaurante_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registro_restaurante_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistroRestaurantePage);



/***/ }),

/***/ 8034:
/*!**********************************************************************************!*\
  !*** ./src/app/registration/registro-restaurante/registro-restaurante.page.scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".Registrarse {\n  width: 150px;\n  margin: auto;\n  margin-top: 20px;\n}\n\nh1 {\n  text-align: center;\n  color: dark;\n  font-family: fantasy, \"Times New Roman\", Times, serif;\n}\n\n.FormularioRegistro {\n  width: 350px;\n  border: 1px solid lightgray;\n  border-radius: 2.5px solid lightgray;\n  padding: 30px;\n  margin: auto;\n  margin-top: 50px;\n}\n\n.FormularioRegistro .usuariofoto {\n  width: 100px;\n  margin: auto;\n}\n\nion-item {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLXJlc3RhdXJhbnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7QUFDTDs7QUFDQztFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFEQUFBO0FBRUw7O0FBQUM7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFHTDs7QUFGSztFQUNJLFlBQUE7RUFDQSxZQUFBO0FBSVQ7O0FBQUM7RUFDSSxtQkFBQTtBQUdMIiwiZmlsZSI6InJlZ2lzdHJvLXJlc3RhdXJhbnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5SZWdpc3RyYXJzZXtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgICBtYXJnaW46YXV0bztcclxuICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gfVxyXG4gaDF7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIGNvbG9yOmRhcms7XHJcbiAgICAgZm9udC1mYW1pbHk6ZmFudGFzeSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuIH1cclxuIC5Gb3JtdWxhcmlvUmVnaXN0cm97XHJcbiAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICBib3JkZXItcmFkaXVzOiAyLjVweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgcGFkZGluZzogMzBweDtcclxuICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAudXN1YXJpb2ZvdG97XHJcbiAgICAgICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICB9XHJcbiB9XHJcbiBcclxuIGlvbi1pdGVte1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiB9Il19 */");

/***/ }),

/***/ 4094:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registro-restaurante/registro-restaurante.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons>\r\n      <ion-img src=\"../assets/logo.png\"></ion-img>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-img name=\"../assets/foto33.jpg\"></ion-img>\r\n        </ion-col>\r\n        <ion-col> <ion-back-button [routerLink]=\"['/home']\"></ion-back-button> <ion-col>Regresar</ion-col></ion-col>\r\n      </ion-row>\r\n    </ion-buttons>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <form  class=\"FormularioRegistro\"(ngSubmit)=\"Register()\"[formGroup]=\"credentials\"> \r\n    <ion-img class=\"usuariofoto\" src=\"../assets/usuariores.png\"></ion-img>\r\n    <h1>\r\nRegístrate\r\n    </h1>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Nombre</ion-label>\r\n      <ion-input type=\"text\" required formControlName=\"name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Dirección</ion-label>\r\n      <ion-input type=\"text\" required formControlName=\"firstname\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Latitud</ion-label>\r\n      <ion-input type=\"password\" required formControlName=\"latitude\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Longitud</ion-label>\r\n      <ion-input type=\"password\" required formControlName=\"longitude\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Correo Electronico</ion-label>\r\n      <ion-input type=\"text\" required formControlName=\"Email\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Foto</ion-label>\r\n      <ion-input type=\"password\" required formControlName=\"foto\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Ingresa tu Contraseña</ion-label>\r\n      <ion-input type=\"password\" required formControlName=\"password\"></ion-input>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button  class= \"Registrarse\" type=\"submit\" color=\"primary\" expand=\"block\">Registrarse</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_registration_registro-restaurante_registro-restaurante_module_ts.js.map