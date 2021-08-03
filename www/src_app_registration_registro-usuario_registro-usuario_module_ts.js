(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_registration_registro-usuario_registro-usuario_module_ts"],{

/***/ 5935:
/*!**********************************************************************************!*\
  !*** ./src/app/registration/registro-usuario/registro-usuario-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroUsuarioPageRoutingModule": () => (/* binding */ RegistroUsuarioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _registro_usuario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-usuario.page */ 9723);




const routes = [
    {
        path: '',
        component: _registro_usuario_page__WEBPACK_IMPORTED_MODULE_0__.RegistroUsuarioPage
    }
];
let RegistroUsuarioPageRoutingModule = class RegistroUsuarioPageRoutingModule {
};
RegistroUsuarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroUsuarioPageRoutingModule);



/***/ }),

/***/ 1428:
/*!**************************************************************************!*\
  !*** ./src/app/registration/registro-usuario/registro-usuario.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroUsuarioPageModule": () => (/* binding */ RegistroUsuarioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _registro_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-usuario-routing.module */ 5935);
/* harmony import */ var _registro_usuario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-usuario.page */ 9723);







let RegistroUsuarioPageModule = class RegistroUsuarioPageModule {
};
RegistroUsuarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registro_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroUsuarioPageRoutingModule,
            // BrowserModule /* or CommonModule */, 
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_registro_usuario_page__WEBPACK_IMPORTED_MODULE_1__.RegistroUsuarioPage]
    })
], RegistroUsuarioPageModule);



/***/ }),

/***/ 9723:
/*!************************************************************************!*\
  !*** ./src/app/registration/registro-usuario/registro-usuario.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroUsuarioPage": () => (/* binding */ RegistroUsuarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_registro_usuario_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registro-usuario.page.html */ 4153);
/* harmony import */ var _registro_usuario_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-usuario.page.scss */ 4384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);






let RegistroUsuarioPage = class RegistroUsuarioPage {
    constructor(router, fb) {
        this.router = router;
        this.fb = fb;
    }
    ngOnInit() {
        this.credentials = this.fb.group({
            Email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            firstname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            direction: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
    }
    Register() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigateByUrl("/login/usuario", { replaceUrl: true });
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
RegistroUsuarioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
RegistroUsuarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-registro-usuario',
        template: _raw_loader_registro_usuario_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registro_usuario_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistroUsuarioPage);



/***/ }),

/***/ 4384:
/*!**************************************************************************!*\
  !*** ./src/app/registration/registro-usuario/registro-usuario.page.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".Registrarse {\n  width: 150px;\n  margin: auto;\n  margin-top: 20px;\n}\n\nh1 {\n  text-align: center;\n  color: dark;\n  font-family: fantasy, \"Times New Roman\", Times, serif;\n}\n\n.FormularioRegistro {\n  width: 350px;\n  border: 1px solid lightgray;\n  border-radius: 2.5px solid lightgray;\n  padding: 30px;\n  margin: auto;\n  margin-top: 50px;\n}\n\n.FormularioRegistro .usuariofoto {\n  width: 100px;\n  margin: auto;\n}\n\nion-item {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLXVzdWFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtBQUNMOztBQUNDO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EscURBQUE7QUFFTDs7QUFBQztFQUNJLFlBQUE7RUFDQSwyQkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUdMOztBQUZLO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFJVDs7QUFBQztFQUNJLG1CQUFBO0FBR0wiLCJmaWxlIjoicmVnaXN0cm8tdXN1YXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUmVnaXN0cmFyc2V7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuIH1cclxuIGgxe1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBjb2xvcjpkYXJrO1xyXG4gICAgIGZvbnQtZmFtaWx5OmZhbnRhc3ksICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiB9XHJcbiAuRm9ybXVsYXJpb1JlZ2lzdHJve1xyXG4gICAgIHdpZHRoOiAzNTBweDtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMi41cHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgLnVzdWFyaW9mb3Rve1xyXG4gICAgICAgICB3aWR0aDoxMDBweDtcclxuICAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgfVxyXG4gfVxyXG4gXHJcbiBpb24taXRlbXtcclxuICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gfSJdfQ== */");

/***/ }),

/***/ 4153:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registro-usuario/registro-usuario.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"gray\">\r\n    <ion-buttons>\r\n      <ion-img src=\"../assets/logo.png\"></ion-img>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-img name=\"../assets/foto33.jpg\"></ion-img>\r\n        </ion-col>\r\n        <ion-col> <ion-back-button [routerLink]=\"['/home']\"></ion-back-button> <ion-col>Regresar</ion-col></ion-col>\r\n      </ion-row>\r\n      \r\n  \r\n    </ion-buttons>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <form  class=\"FormularioRegistro\"(ngSubmit)=\"Register()\"[formGroup]=\"credentials\"> \r\n    <ion-img class=\"usuariofoto\" src=\"../assets/usuario.png\"></ion-img>\r\n    <h1>\r\nRegístrate\r\n    </h1>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Nombre</ion-label>\r\n      <ion-input type=\"text\" required formControlName=\"name\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Apellido</ion-label>\r\n      <ion-input type=\"text\" required formControlName=\"firstname\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Dirección</ion-label>\r\n      <ion-input type=\"text\" required formControlName=\"direction\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Correo Electronico</ion-label>\r\n      <ion-input type=\"text\" required formControlName=\"Email\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Ingresa tu Contraseña</ion-label>\r\n      <ion-input type=\"password\" required formControlName=\"password\"></ion-input>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button  class= \"Registrarse\" type=\"submit\" color=\"dark\" expand=\"block\">Registrarse</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_registration_registro-usuario_registro-usuario_module_ts.js.map