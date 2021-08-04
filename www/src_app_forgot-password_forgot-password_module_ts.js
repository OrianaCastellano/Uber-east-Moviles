(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_forgot-password_forgot-password_module_ts"],{

/***/ 3673:
/*!*******************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageRoutingModule": () => (/* binding */ ForgotPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page */ 2327);




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ 7157:
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageModule": () => (/* binding */ ForgotPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-routing.module */ 3673);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page */ 2327);







let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPageRoutingModule
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPage]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ 2327:
/*!*********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPage": () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./forgot-password.page.html */ 2646);
/* harmony import */ var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page.scss */ 6249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ForgotPasswordPage = class ForgotPasswordPage {
    constructor() { }
    ngOnInit() {
    }
};
ForgotPasswordPage.ctorParameters = () => [];
ForgotPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ForgotPasswordPage);



/***/ }),

/***/ 6249:
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".concontra {\n  width: 350px;\n  border: 1px solid lightgray;\n  border-radius: 2.5px solid lightgray;\n  padding: 30px;\n  margin: auto;\n  margin-top: 7.5%;\n}\n\n.concontra .img-parentesis {\n  display: flex;\n}\n\n.concontra .img-parentesis ion-icon {\n  font-size: 2em;\n  text-align: center;\n  margin: auto;\n}\n\n.concontra p {\n  text-align: center;\n}\n\n.img {\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFHSTtFQUNJLGFBQUE7QUFBUjs7QUFDUTtFQUVJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFBWjs7QUFLSTtFQUNJLGtCQUFBO0FBSFI7O0FBTUE7RUFDSSxZQUFBO0FBSEoiLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25jb250cmF7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyLjVweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNy41JTtcclxufVxyXG4uY29uY29udHJhIHtcclxuXHJcbiAgICAuaW1nLXBhcmVudGVzaXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG5cclxuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4uaW1ne1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 2646:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar color=\"gray\">\r\n      <ion-buttons>\r\n        <ion-img class=\"img\"src=\"../assets/logo.png\"></ion-img>\r\n        <ion-row>\r\n          <ion-back-button [routerLink]=\"['/home']\"></ion-back-button> \r\n           </ion-row>\r\n      </ion-buttons>\r\n      </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <form class=\"concontra\">\r\n    <ion-row>\r\n      <ion-col class=\"img-parentesis\">\r\n        <ion-icon name=\"mail-outline\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n    <p>Confirmación de nueva contraseña</p>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Correo electronico</ion-label>\r\n      <ion-input type=\"email\" required></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button class=\"concontraa\" type=\"submit\" color=\"dark\" expand=\"block\">confirmar</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <small>\r\n      Proporcione  la dirección de correo electrónico que utilizó cuando registro su usuario\r\n    </small>\r\n  </form>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_forgot-password_forgot-password_module_ts.js.map