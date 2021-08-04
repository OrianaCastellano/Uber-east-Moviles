(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_registration_registro-chofer_registro-chofer_module_ts"],{

/***/ 8836:
/*!********************************************************************************!*\
  !*** ./src/app/registration/registro-chofer/registro-chofer-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroChoferPageRoutingModule": () => (/* binding */ RegistroChoferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _registro_chofer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-chofer.page */ 5027);




const routes = [
    {
        path: '',
        component: _registro_chofer_page__WEBPACK_IMPORTED_MODULE_0__.RegistroChoferPage
    }
];
let RegistroChoferPageRoutingModule = class RegistroChoferPageRoutingModule {
};
RegistroChoferPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroChoferPageRoutingModule);



/***/ }),

/***/ 8947:
/*!************************************************************************!*\
  !*** ./src/app/registration/registro-chofer/registro-chofer.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroChoferPageModule": () => (/* binding */ RegistroChoferPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _registro_chofer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-chofer-routing.module */ 8836);
/* harmony import */ var _registro_chofer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-chofer.page */ 5027);







let RegistroChoferPageModule = class RegistroChoferPageModule {
};
RegistroChoferPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registro_chofer_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroChoferPageRoutingModule,
            // BrowserModule /* or CommonModule */, 
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_registro_chofer_page__WEBPACK_IMPORTED_MODULE_1__.RegistroChoferPage]
    })
], RegistroChoferPageModule);



/***/ }),

/***/ 5027:
/*!**********************************************************************!*\
  !*** ./src/app/registration/registro-chofer/registro-chofer.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroChoferPage": () => (/* binding */ RegistroChoferPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_registro_chofer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registro-chofer.page.html */ 5001);
/* harmony import */ var _registro_chofer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-chofer.page.scss */ 9239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_multilevel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/multilevel.service */ 568);







let RegistroChoferPage = class RegistroChoferPage {
    constructor(router, fb, multilevelservice) {
        this.router = router;
        this.fb = fb;
        this.multilevelservice = multilevelservice;
    }
    ngOnInit() {
        this.credentials = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            foto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            color: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            placa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    registerConductor() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.multilevelservice
                .registerConductor(this.credentials.value)
                .subscribe((res) => {
                if (res.status == 200) {
                    this.router.navigateByUrl('/login/chofer', { replaceUrl: true });
                }
                else if (res.status == 403) {
                    alert('Ya existe este correo');
                }
                else {
                    alert('Error del servidor');
                }
            });
            console.log(this.credentials.value);
        });
    }
    get email() {
        return this.credentials.get('email');
    }
    get password() {
        return this.credentials.get('password');
    }
    get lastname() {
        return this.credentials.get('lastname');
    }
    get name() {
        return this.credentials.get('name');
    }
    get foto() {
        return this.credentials.get('foto');
    }
    get color() {
        return this.credentials.get('color');
    }
    get placa() {
        return this.credentials.get('placa');
    }
};
RegistroChoferPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_multilevel_service__WEBPACK_IMPORTED_MODULE_2__.MultilevelService }
];
RegistroChoferPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-registro-chofer',
        template: _raw_loader_registro_chofer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registro_chofer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistroChoferPage);



/***/ }),

/***/ 9239:
/*!************************************************************************!*\
  !*** ./src/app/registration/registro-chofer/registro-chofer.page.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".Registrarse {\n  width: 150px;\n  margin: auto;\n  margin-top: 20px;\n}\n\nh1 {\n  text-align: center;\n  color: dark;\n  font-family: fantasy, \"Times New Roman\", Times, serif;\n}\n\n.FormularioRegistro {\n  width: 350px;\n  border: 1px solid lightgray;\n  border-radius: 2.5px solid lightgray;\n  padding: 30px;\n  margin: auto;\n  margin-top: 50px;\n}\n\n.FormularioRegistro .usuariofoto {\n  width: 100px;\n  margin: auto;\n}\n\nion-item {\n  margin-bottom: 10px;\n}\n\n.img {\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLWNob2Zlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0FBQ0w7O0FBQ0M7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxREFBQTtBQUVMOztBQUFDO0VBQ0ksWUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBR0w7O0FBRks7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUlUOztBQUFDO0VBQ0ksbUJBQUE7QUFHTDs7QUFEQztFQUNHLFlBQUE7QUFJSiIsImZpbGUiOiJyZWdpc3Ryby1jaG9mZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlJlZ2lzdHJhcnNle1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgIG1hcmdpbjphdXRvO1xyXG4gICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiB9XHJcbiBoMXtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgY29sb3I6ZGFyaztcclxuICAgICBmb250LWZhbWlseTpmYW50YXN5LCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gfVxyXG4gLkZvcm11bGFyaW9SZWdpc3Ryb3tcclxuICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDIuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgIG1hcmdpbjogYXV0bztcclxuICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgIC51c3VhcmlvZm90b3tcclxuICAgICAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgIH1cclxuIH1cclxuIFxyXG4gaW9uLWl0ZW17XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuIH1cclxuIC5pbWd7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 5001:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registro-chofer/registro-chofer.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons>\r\n      <ion-img class=\"img\" src=\"../assets/logo.png\"></ion-img>\r\n      <ion-row>\r\n        <ion-back-button [routerLink]=\"['/home']\"></ion-back-button>\r\n      </ion-row>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form\r\n    class=\"FormularioRegistro\"\r\n    (ngSubmit)=\"registerConductor()\"\r\n    [formGroup]=\"credentials\"\r\n  >\r\n    <ion-img class=\"usuariofoto\" src=\"../assets/usuariocho.png\"></ion-img>\r\n    <h1>Regístrate</h1>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Nombre</ion-label>\r\n      <ion-input type=\"text\" required formControlName=\"name\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Apellido</ion-label>\r\n      <ion-input type=\"text\" required formControlName=\"lastname\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Correo Electronico</ion-label>\r\n      <ion-input type=\"text\" required formControlName=\"email\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Ingresa tu Contraseña</ion-label>\r\n      <ion-input\r\n        type=\"password\"\r\n        required\r\n        formControlName=\"password\"\r\n      ></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Placa del Vehiculo</ion-label>\r\n      <ion-input type=\"text\" required formControlName=\"placa\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Color del Vehiculo</ion-label>\r\n      <ion-input type=\"text\" required formControlName=\"color\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Foto</ion-label>\r\n      <ion-input type=\"text\" required formControlName=\"foto\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button\r\n          class=\"Registrarse\"\r\n          type=\"submit\"\r\n          color=\"danger\"\r\n          expand=\"block\"\r\n          >Registrarse</ion-button\r\n        >\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_registration_registro-chofer_registro-chofer_module_ts.js.map