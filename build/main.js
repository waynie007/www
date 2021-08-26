webpackJsonp([0],{

/***/ 173:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 217;

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_admin__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__admin_admin__["a" /* AdminPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Wayne Fode\Desktop\FYP Doc\ionic-geofence-app-source files\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Admin" tabIcon="people"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Wayne Fode\Desktop\FYP Doc\ionic-geofence-app-source files\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pusher_pusher__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_phonegap_local_notification__ = __webpack_require__(366);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, pusher, platform, localNotification) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.pusher = pusher;
        this.platform = platform;
        this.localNotification = localNotification;
        this.tab = 'location';
        this.notifications = [];
        this.center = {
            lat: 6.435838,
            lng: 3.451384,
        };
        this.permissionGranted = false;
        this.address = '';
        if (platform.is('cordova')) {
            platform.ready().then(function (_) {
                _this.localNotification.requestPermission().then(function (perm) {
                    if (perm === 'granted')
                        _this.permissionGranted = true;
                });
            });
        }
    }
    AdminPage.prototype.reverseGeocode = function (latLng) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: latLng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    var address = results[0].formatted_address;
                    var addressList = address.split(',');
                    _this.address = addressList[0];
                }
            }
        });
    };
    AdminPage.prototype.ngOnInit = function () {
        var _this = this;
        var locationChannel = this.pusher.init('location');
        var geofenceChannel = this.pusher.init('location');
        locationChannel.bind('ping', function (data) {
            _this.center = __assign({}, data);
        });
        geofenceChannel.bind('exit', function (data) {
            _this.reverseGeocode(data);
            if (_this.permissionGranted) {
                _this.localNotification.create('Geofence exited', {
                    tag: 'message1',
                    body: 'User has exited the defined geofence',
                    icon: 'assets/imgs/user.svg',
                });
            }
            var notification = {
                header: 'User has exited the geofence',
                body: "Current location: " + _this.address,
            };
            _this.notifications = _this.notifications.concat(notification);
        });
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\Users\Wayne Fode\Desktop\FYP Doc\ionic-geofence-app-source files\src\pages\admin\admin.html"*/'<ion-header>\n  <div padding>\n    <ion-segment [(ngModel)]="tab">\n      <ion-segment-button value="location">\n        Position\n      </ion-segment-button>\n      <ion-segment-button value="notifications">\n        Notifications\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]="tab" style="height: 100%">\n    <div *ngSwitchCase="\'location\'" style="height: 100%">\n      <map [center]="center"></map>\n    </div>\n    <div *ngSwitchCase="\'notifications\'" class="notifications-holder">\n      <h4 class="no-notifications" *ngIf="!notifications.length">No notifications to display</h4>\n      <ion-list *ngIf="notifications.length">\n        <ion-item *ngFor="let notification of notifications">\n          <ion-thumbnail item-start>\n            <ion-icon name="person"></ion-icon>\n          </ion-thumbnail>\n          <h2>{{notification.header}}</h2>\n          <p>{{notification.body}}</p>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Wayne Fode\Desktop\FYP Doc\ionic-geofence-app-source files\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_pusher_pusher__["a" /* PusherProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_phonegap_local_notification__["a" /* PhonegapLocalNotification */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PusherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pusher_js__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pusher_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pusher_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PusherProvider = /** @class */ (function () {
    function PusherProvider() {
        this.pusher = new __WEBPACK_IMPORTED_MODULE_1_pusher_js___default.a('PUSHER_KEY', {
            cluster: 'eu',
            encrypted: true,
        });
    }
    PusherProvider.prototype.init = function (channelName) {
        var channel = this.pusher.subscribe(channelName);
        return channel;
    };
    PusherProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PusherProvider);
    return PusherProvider;
}());

//# sourceMappingURL=pusher.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geofence__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loader, geolocation, http, geofence, platform) {
        this.navCtrl = navCtrl;
        this.loader = loader;
        this.geolocation = geolocation;
        this.http = http;
        this.geofence = geofence;
        this.platform = platform;
        // center = {
        //   lat: 6.435838,
        //   lng: 3.451384,
        // };
        this.center = {
            lat: 6.4393477,
            lng: 3.5244628999999996,
        };
        this.zoom = 15;
        this.address = '';
        this.state = '';
        if (this.platform.is('cordova')) {
            this.platform.ready().then(function (_) {
                geofence.initialize().then(function (_) {
                    console.log('Geofence Plugin Ready');
                });
            });
        }
    }
    HomePage.prototype.createGeofence = function () {
        var _this = this;
        var fence = {
            id: '69ca1b88-6fbe-4e80-a4d4-ff4d3748acdb',
            latitude: this.center.lat,
            longitude: this.center.lng,
            radius: 1000,
            transitionType: 2,
        };
        this.geofence
            .addOrUpdate(fence)
            .then(function () { return console.log('Geofence added'); }, function (err) { return console.log('Geofence failed to add', err); });
        this.geofence.onTransitionReceived().subscribe(function (res) {
            _this.notify(_this.center);
        });
    };
    HomePage.prototype.reverseGeocode = function (latLng) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: latLng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    var address = results[0].formatted_address;
                    var addressList = address.split(',');
                    _this.address = addressList[0];
                    _this.state = addressList.slice(2).join(', ');
                }
            }
        });
    };
    HomePage.prototype.pingLocation = function (location) {
        this.http
            .post('http://localhost:4000/ping', location)
            .subscribe(function (res) { });
    };
    HomePage.prototype.notify = function (location) {
        this.http
            .post('http://localhost:4000/notify', location)
            .subscribe(function (res) { });
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.loader.load().then(function () {
            _this.reverseGeocode(_this.center);
            _this.pingLocation(_this.center);
        });
        this.platform.ready().then(function () {
            if (_this.platform.is('cordova')) {
                _this.createGeofence();
                var watch = _this.geolocation.watchPosition();
                watch.subscribe(function (position) {
                    console.table(position);
                    _this.center = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    _this.reverseGeocode(_this.center);
                    _this.pingLocation(_this.center);
                });
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Wayne Fode\Desktop\FYP Doc\ionic-geofence-app-source files\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <map [center]="center" [zoom]="zoom">\n  </map>\n  <div class="location-address">\n    <p>{{address}}</p>\n    <h4>{{state}}</h4>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Wayne Fode\Desktop\FYP Doc\ionic-geofence-app-source files\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geofence__["a" /* Geofence */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(376);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_admin_admin__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_map_map__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_pusher_pusher__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_geofence__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_phonegap_local_notification__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_5__pages_admin_admin__["a" /* AdminPage */], __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_11__components_map_map__["a" /* MapComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__agm_core__["a" /* AgmCoreModule */].forRoot({
                    // please get your own API key here:
                    // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
                    apiKey: 'AIzaSyDHubkW4VfwS6qQ68Dz9_3BDFc8N39uEnM',
                    libraries: ['geometry'],
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_5__pages_admin_admin__["a" /* AdminPage */], __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_pusher_pusher__["a" /* PusherProvider */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_geofence__["a" /* Geofence */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_phonegap_local_notification__["a" /* PhonegapLocalNotification */],
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(363);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Wayne Fode\Desktop\FYP Doc\ionic-geofence-app-source files\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Wayne Fode\Desktop\FYP Doc\ionic-geofence-app-source files\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the MapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.center = {
            lat: 6.435838,
            lng: 3.451384,
        };
        this.zoom = 15;
        this.radiusCenter = {
            lat: 6.435838,
            lng: 3.451384,
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "center", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "zoom", void 0);
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'map',template:/*ion-inline-start:"C:\Users\Wayne Fode\Desktop\FYP Doc\ionic-geofence-app-source files\src\components\map\map.html"*/'<agm-map [latitude]="center.lat" [longitude]="center.lng" [zoom]="zoom">\n  <agm-marker [latitude]="center.lat" [longitude]="center.lng" [iconUrl]="\'assets/imgs/user.svg\'"></agm-marker>\n  <agm-circle [latitude]="radiusCenter.lat" [longitude]="radiusCenter.lng" [radius]="500" [fillColor]="\'#ADC1B9\'"></agm-circle>\n</agm-map>'/*ion-inline-end:"C:\Users\Wayne Fode\Desktop\FYP Doc\ionic-geofence-app-source files\src\components\map\map.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());

//# sourceMappingURL=map.js.map

/***/ })

},[371]);
//# sourceMappingURL=main.js.map