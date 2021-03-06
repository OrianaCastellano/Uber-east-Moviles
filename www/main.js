(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then(m => m.LoginPageModule)
    },
    {
        path: 'registro',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_registration_registration_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./registration/registration.module */ 5375)).then(m => m.RegistrationPageModule)
    },
    {
        path: 'forgot-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_forgot-password_forgot-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./forgot-password/forgot-password.module */ 7157)).then(m => m.ForgotPasswordPageModule)
    },
    {
        path: 'sesion',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sesion_sesion_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sesion/sesion.module */ 7236)).then(m => m.SesionPageModule)
    },
    {
        path: 'yo',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_yo_yo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./yo/yo.module */ 9924)).then(m => m.YOPageModule)
    },
    {
        path: 'menurestaurante/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_menurestaurante_menurestaurante_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./menurestaurante/menurestaurante.module */ 3835)).then(m => m.MenurestaurantePageModule)
    },
    {
        path: 'miscompras-usuario',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_miscompras-usuario_miscompras-usuario_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./miscompras-usuario/miscompras-usuario.module */ 6986)).then(m => m.MiscomprasUsuarioPageModule)
    },
    {
        path: 'misfavoritos-usuario',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_misfavoritos_misfavoritos-usuario_misfavoritos-usuario_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./misfavoritos/misfavoritos-usuario/misfavoritos-usuario.module */ 8644)).then(m => m.MisfavoritosUsuarioPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _multilevel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multilevel.service */ 568);






let AppComponent = class AppComponent {
    constructor(multilevelservice, router) {
        this.multilevelservice = multilevelservice;
        this.router = router;
    }
    ngOnInit() {
        this.router.navigateByUrl("/");
    }
};
AppComponent.ctorParameters = () => [
    { type: _multilevel_service__WEBPACK_IMPORTED_MODULE_2__.MultilevelService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _multilevel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multilevel.service */ 568);









let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy }, _multilevel_service__WEBPACK_IMPORTED_MODULE_2__.MultilevelService],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 568:
/*!***************************************!*\
  !*** ./src/app/multilevel.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultilevelService": () => (/* binding */ MultilevelService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);



let MultilevelService = class MultilevelService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:3002/api/v1';
        this.users = {};
        this.pedidos = [];
        this.total = 0;
        console.log('Multiservice');
    }
    setusers(users) {
        this.users = users;
    }
    agregarPedido(pedido) {
        let index = this.pedidos.findIndex((p) => {
            return p.id == pedido.id;
        });
        if (index != -1) {
            this.pedidos[index].cantidad += 1;
        }
        else {
            pedido.cantidad = 1;
            this.pedidos.push(pedido);
        }
        console.log(this.pedidos);
        this.calcularTotal();
    }
    borrarPedido(id) {
        console.log(this.pedidos);
        this.pedidos = this.pedidos.filter((pedido) => {
            return pedido.id != id;
        });
        console.log(id);
        this.calcularTotal();
    }
    calcularTotal() {
        let total = 0;
        for (let pedido of this.pedidos) {
            total += pedido.cantidad * pedido.precio;
        }
        this.total = total;
        console.log(this.total);
    }
    get_establishment() {
        return this.http.get(this.url + '/establishment/getEstablishments');
    }
    get_productByIdEsta(id) {
        return this.http.get(this.url + '/product/getProductsByIdEstablishment/' + id);
    }
    register(form) {
        form = JSON.stringify(form);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
        });
        let options = { body: form, headers };
        console.log(options);
        return this.http.post(this.url + `/user/signup`, form, options);
    }
    registerRest(form) {
        form = JSON.stringify(form);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
        });
        let options = { body: form, headers };
        console.log(options);
        return this.http.post(this.url + `/establishment/signup`, form, options);
    }
    registerConductor(form) {
        form = JSON.stringify(form);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
        });
        let options = { body: form, headers };
        console.log(options);
        return this.http.post(this.url + `/driver/signup`, form, options);
    }
    loginConductor(form) {
        form = JSON.stringify(form);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
        });
        let options = { body: form, headers };
        console.log(options);
        return this.http.post(this.url + `/driver/signup`, form, options);
    }
    loginUser(form) {
        form = JSON.stringify(form);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
        });
        let options = { body: form, headers };
        console.log(options);
        return this.http.post(this.url + `/user/signin`, form, options);
    }
    loginChofer(form) {
        form = JSON.stringify(form);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
        });
        let options = { body: form, headers };
        console.log(options);
        return this.http.post(this.url + `/driver/signin`, form, options);
    }
    loginRest(form) {
        form = JSON.stringify(form);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
        });
        let options = { body: form, headers };
        console.log(options);
        return this.http.post(this.url + `/establishment/signin`, form, options);
    }
};
MultilevelService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
MultilevelService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], MultilevelService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".icon {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n</ion-app>\r\n\r\n<ion-menu side=\"end\" content-id=\"main\" autoHide=\"true\">\r\n  <ion-content>\r\n    <ion-list *ngIf=\"multilevelservice.users.type==1\">\r\n        <ion-menu-toggle>\r\n          <ion-title color=\"dark\">TUS OPCIONES</ion-title>\r\n          <ion-item routerLink=\"/yo/usuario\">\r\n        <ion-icon  name=\"person\"  class=\"icon\"></ion-icon>Editar Perfil\r\n        </ion-item>\r\n        <ion-item routerLink=\"/miscompras-usuario\">\r\n          <ion-icon name=\"cart\"  class=\"icon\"></ion-icon>Mi Pedido Actual\r\n        </ion-item>\r\n        <ion-item routerLink=\"/misfavoritos-usuario\">\r\n          <ion-icon name=\"heart\"  class=\"icon\"></ion-icon>Mis Restaurantes Favoritos\r\n        </ion-item>\r\n        <ion-item routerLink=\"/home\">\r\n          <ion-icon name=\"pricetags\"  class=\"icon\"></ion-icon>Mis Compras/Facturas\r\n        </ion-item>\r\n  <ion-item routerLink=\"/login/usuario\">\r\n    <ion-icon name=\"moon\" class=\"icon\"></ion-icon> Cerrar Sesi??n \r\n</ion-item>\r\n </ion-menu-toggle>\r\n</ion-list>\r\n\r\n      <ion-list *ngIf=\"multilevelservice.users.type==2\">\r\n        <ion-menu-toggle>\r\n          <ion-title color=\"dark\">TUS OPCIONES</ion-title>\r\n          <ion-item routerLink=\"/yo/restaurante\">\r\n        <ion-icon  name=\"person\"  class=\"icon\"></ion-icon>Editar Perfil\r\n        </ion-item>\r\n        <ion-item routerLink=\"/sesion-restaurante\">\r\n          <ion-icon name=\"pricetags\"  class=\"icon\"></ion-icon>Mis Pedidos/Mis Ventas\r\n        </ion-item>\r\n  <ion-item routerLink=\"/login/restaurante\">\r\n    <ion-icon name=\"moon\" class=\"icon\"></ion-icon> Cerrar Sesi??n \r\n</ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n\r\n      <ion-list *ngIf=\"multilevelservice.users.type==3\">\r\n        <ion-menu-toggle>\r\n          <ion-title color=\"dark\">TUS OPCIONES</ion-title>\r\n          <ion-item routerLink=\"/yo/chofer\">\r\n        <ion-icon  name=\"person\"  class=\"icon\"></ion-icon>Editar Perfil\r\n        </ion-item>\r\n        <ion-item routerLink=\"/sesion-chofer\">\r\n          <ion-icon name=\"pricetags\"  class=\"icon\"></ion-icon>Pedidos Listos\r\n        </ion-item>\r\n  <ion-item routerLink=\"/login/chofer\">\r\n    <ion-icon name=\"moon\" class=\"icon\"></ion-icon> Cerrar Sesi??n \r\n</ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map