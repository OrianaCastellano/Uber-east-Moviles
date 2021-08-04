(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_login_login-chofer_login-chofer_module_ts"],{

/***/ 5196:
/*!*******************************************************************!*\
  !*** ./src/app/login/login-chofer/login-chofer-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginChoferPageRoutingModule": () => (/* binding */ LoginChoferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_chofer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-chofer.page */ 8190);




const routes = [
    {
        path: '',
        component: _login_chofer_page__WEBPACK_IMPORTED_MODULE_0__.LoginChoferPage
    }
];
let LoginChoferPageRoutingModule = class LoginChoferPageRoutingModule {
};
LoginChoferPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginChoferPageRoutingModule);



/***/ }),

/***/ 3175:
/*!***********************************************************!*\
  !*** ./src/app/login/login-chofer/login-chofer.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginChoferPageModule": () => (/* binding */ LoginChoferPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_chofer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-chofer-routing.module */ 5196);
/* harmony import */ var _login_chofer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-chofer.page */ 8190);







let LoginChoferPageModule = class LoginChoferPageModule {
};
LoginChoferPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_chofer_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginChoferPageRoutingModule,
            // BrowserModule /* or CommonModule */, 
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_chofer_page__WEBPACK_IMPORTED_MODULE_1__.LoginChoferPage]
    })
], LoginChoferPageModule);



/***/ }),

/***/ 8190:
/*!*********************************************************!*\
  !*** ./src/app/login/login-chofer/login-chofer.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginChoferPage": () => (/* binding */ LoginChoferPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_chofer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login-chofer.page.html */ 7020);
/* harmony import */ var _login_chofer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-chofer.page.scss */ 9009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_multilevel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/multilevel.service */ 568);







let LoginChoferPage = class LoginChoferPage {
    constructor(router, fb, multilevelservice) {
        this.router = router;
        this.fb = fb;
        this.multilevelservice = multilevelservice;
    }
    ngOnInit() {
        this.credentials = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    loginChofer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.multilevelservice
                .loginChofer(this.credentials.value)
                .subscribe((res) => {
                console.log(res);
                if (res.status == 200) {
                    let chofer = {
                        name: res.data[0].profile.d_name,
                        lastname: res.data[0].profile.d_lastname,
                        email: res.data[0].profile.d_email,
                        id: res.data[0].profile.d_id,
                        token: res.data[0].token,
                        type: 3,
                    };
                    this.multilevelservice.setusers(chofer);
                    // this.router.navigateByUrl('/sesion/chofer', { replaceUrl: true });
                }
                else if (res.status == 403) {
                    alert('Error al iniciar sesion');
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
};
LoginChoferPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_multilevel_service__WEBPACK_IMPORTED_MODULE_2__.MultilevelService }
];
LoginChoferPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login-chofer',
        template: _raw_loader_login_chofer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_chofer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginChoferPage);



/***/ }),

/***/ 9009:
/*!***********************************************************!*\
  !*** ./src/app/login/login-chofer/login-chofer.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".login {\n  width: 150px;\n  margin: auto;\n  margin-top: 20px;\n}\n\nh1 {\n  text-align: center;\n  color: dark;\n  font-family: fantasy, \"Times New Roman\", Times, serif;\n}\n\n.loguearse {\n  width: 350px;\n  border: 1px solid lightgray;\n  border-radius: 2.5px solid lightgray;\n  padding: 30px;\n  margin: auto;\n  margin-top: 50px;\n}\n\n.loguearse .usuariofoto {\n  width: 100px;\n  margin: auto;\n}\n\n.contrasena {\n  padding: 30px 0 0 0;\n  text-align: center;\n}\n\n.contrasena a {\n  color: #030303;\n}\n\n.img {\n  width: 150px;\n}\n\n.registrarse {\n  text-align: center;\n}\n\n.registrarse a {\n  color: #030303;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWNob2Zlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxREFBQTtBQUVKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBREk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUdSOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQURJO0VBQ0ksY0FBQTtBQUdSOztBQUFBO0VBQ0ksWUFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7QUFJSjs7QUFISTtFQUNJLGNBQUE7QUFLUiIsImZpbGUiOiJsb2dpbi1jaG9mZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2lue1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbmgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ZGFyaztcclxuICAgIGZvbnQtZmFtaWx5OmZhbnRhc3ksICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuXHJcbi5sb2d1ZWFyc2V7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyLjVweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIC51c3VhcmlvZm90b3tcclxuICAgICAgICB3aWR0aDoxMDBweDtcclxuICAgICAgICBtYXJnaW46YXV0bztcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRyYXNlbmF7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDAgMCAwIDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGF7XHJcbiAgICAgICAgY29sb3I6cmdiKDMsIDMsIDMpOyBcclxuICAgIH1cclxufVxyXG4uaW1ne1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbi5yZWdpc3RyYXJzZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGF7XHJcbiAgICAgICAgY29sb3I6cmdiKDMsIDMsIDMpOyBcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 7020:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login-chofer/login-chofer.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons>\r\n      <ion-img class=\"img\" src=\"../assets/logo.png\"></ion-img>\r\n      <ion-row>\r\n        <ion-back-button [routerLink]=\"['/home']\"></ion-back-button>\r\n      </ion-row>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form class=\"loguearse\" (ngSubmit)=\"loginChofer()\" [formGroup]=\"credentials\">\r\n    <ion-img class=\"usuariofoto\" src=\"../assets/usuariocho.png\"></ion-img>\r\n    <h1>Inicia Sesion</h1>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Correo Electronico</ion-label>\r\n      <ion-input type=\"text\" required formControlName=\"email\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Contraseña</ion-label>\r\n      <ion-input\r\n        type=\"password\"\r\n        required\r\n        formControlName=\"password\"\r\n      ></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button\r\n          class=\"login\"\r\n          type=\"submit\"\r\n          color=\"danger\"\r\n          expand=\"block\"\r\n          routerLink=\"/sesion/chofer\"\r\n          >ingresar</ion-button\r\n        >\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"contrasena\">\r\n        <a [routerLink]=\"['/forgot-password']\" class=\"small-text\">\r\n          Olvidaste tu contraseña?\r\n        </a>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"registrarse\">\r\n        <a\r\n          [routerLink]=\"['/registro/chofer']\"\r\n          color=\"danger\"\r\n          class=\"small-text\"\r\n        >\r\n          Registrarse\r\n        </a>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login-chofer_login-chofer_module_ts.js.map