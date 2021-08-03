(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_login_login-usuario_login-usuario_module_ts"],{

/***/ 4246:
/*!*********************************************************************!*\
  !*** ./src/app/login/login-usuario/login-usuario-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginUsuarioPageRoutingModule": () => (/* binding */ LoginUsuarioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_usuario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-usuario.page */ 6199);




const routes = [
    {
        path: '',
        component: _login_usuario_page__WEBPACK_IMPORTED_MODULE_0__.LoginUsuarioPage
    }
];
let LoginUsuarioPageRoutingModule = class LoginUsuarioPageRoutingModule {
};
LoginUsuarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginUsuarioPageRoutingModule);



/***/ }),

/***/ 9135:
/*!*************************************************************!*\
  !*** ./src/app/login/login-usuario/login-usuario.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginUsuarioPageModule": () => (/* binding */ LoginUsuarioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-usuario-routing.module */ 4246);
/* harmony import */ var _login_usuario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-usuario.page */ 6199);







let LoginUsuarioPageModule = class LoginUsuarioPageModule {
};
LoginUsuarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginUsuarioPageRoutingModule,
            // BrowserModule /* or CommonModule */, 
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_usuario_page__WEBPACK_IMPORTED_MODULE_1__.LoginUsuarioPage]
    })
], LoginUsuarioPageModule);



/***/ }),

/***/ 6199:
/*!***********************************************************!*\
  !*** ./src/app/login/login-usuario/login-usuario.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginUsuarioPage": () => (/* binding */ LoginUsuarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_usuario_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login-usuario.page.html */ 8504);
/* harmony import */ var _login_usuario_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-usuario.page.scss */ 4356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);






let LoginUsuarioPage = class LoginUsuarioPage {
    constructor(router, fb) {
        this.router = router;
        this.fb = fb;
    }
    ngOnInit() {
        this.credentials = this.fb.group({
            Email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigateByUrl("/sesion/usuario", { replaceUrl: true });
            console.log(this.credentials.value);
        });
    }
    get email() {
        return this.credentials.get("Email");
    }
    get password() {
        return this.credentials.get("password");
    }
};
LoginUsuarioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
LoginUsuarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-login-usuario',
        template: _raw_loader_login_usuario_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_usuario_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginUsuarioPage);



/***/ }),

/***/ 4356:
/*!*************************************************************!*\
  !*** ./src/app/login/login-usuario/login-usuario.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".login {\n  width: 150px;\n  margin: auto;\n  margin-top: 20px;\n}\n\nh1 {\n  text-align: center;\n  color: dark;\n  font-family: fantasy, \"Times New Roman\", Times, serif;\n}\n\n.loguearse {\n  width: 350px;\n  border: 1px solid lightgray;\n  border-radius: 2.5px solid lightgray;\n  padding: 30px;\n  margin: auto;\n  margin-top: 50px;\n}\n\n.loguearse .usuariofoto {\n  width: 100px;\n  margin: auto;\n}\n\n.registrarse {\n  padding: 30px 0 0 0;\n  text-align: center;\n}\n\n.registrarse a {\n  color: mediumvioletred;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXVzdWFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EscURBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSwyQkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUVKOztBQURJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFHUjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFESTtFQUNJLHNCQUFBO0FBR1IiLCJmaWxlIjoibG9naW4tdXN1YXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW57XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpkYXJrO1xyXG4gICAgZm9udC1mYW1pbHk6ZmFudGFzeSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufVxyXG5cclxuLmxvZ3VlYXJzZXtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgLnVzdWFyaW9mb3Rve1xyXG4gICAgICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmVnaXN0cmFyc2V7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDAgMCAwIDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGF7XHJcbiAgICAgICAgY29sb3I6bWVkaXVtdmlvbGV0cmVkOyBcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 8504:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login-usuario/login-usuario.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar  color=\"gray\">\r\n    <ion-buttons>\r\n      <ion-img src=\"../assets/logo.png\"></ion-img>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-img name=\"../assets/foto33.jpg\"></ion-img></ion-col>\r\n          <ion-col> <ion-back-button [routerLink]=\"['/home']\"></ion-back-button><ion-col>Regresar </ion-col></ion-col>\r\n      </ion-row>\r\n    </ion-buttons> \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n \r\n  <form class=\"loguearse\" (ngSubmit)=\"login()\"[formGroup]=\"credentials\">\r\n    <ion-img class=\"usuariofoto\" src=\"../assets/usuario.png\"></ion-img>\r\n    <h1>\r\nInicia Sesion\r\n    </h1>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Correo Electronico</ion-label>\r\n      <ion-input type=\"text\" required formControlName=\"Email\" ></ion-input >\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Contraseña</ion-label>\r\n      <ion-input type=\"password\" required formControlName=\"password\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button  class=\"login\" type=\"submit\" color=\"dark\" expand=\"block\">ingresar</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"contrasena\">\r\n        <a  [routerLink]=\"['/forgot-password']\"class=\"small-text\"> Olvidaste tu contraseña? </a>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"resgistrarse\">\r\n        <a  [routerLink]=\"['/registro/usuario']\"class=\"small-text\"> Registrarse </a>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login-usuario_login-usuario_module_ts.js.map