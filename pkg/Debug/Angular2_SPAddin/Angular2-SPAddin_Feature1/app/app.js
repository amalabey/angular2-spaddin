webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(2);
	var core_1 = __webpack_require__(8);
	var app_component_1 = __webpack_require__(281);
	if (process.env.ENV === 'production') {
	    core_1.enableProdMode();
	}
	platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, []);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(8);
	__webpack_require__(282);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent.prototype.ngOnInit = function () {
	        console.log("On init - App.Component");
	    };
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            template: __webpack_require__(286),
	            styles: [__webpack_require__(288)],
	            encapsulation: core_1.ViewEncapsulation.Native
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 282:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 286:
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<main>\n  <h1>Hello from Angular 2 App with Webpack</h1>\n  <img src=\"" + __webpack_require__(287) + "\">\n</main>\n";

/***/ },

/***/ 287:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/assets/AppIcon.35881fd569bdc91a20e001fc8bc50cb3.png";

/***/ },

/***/ 288:
/***/ function(module, exports) {

	module.exports = "main {\n  padding: 1em;\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center;\n  margin-top: 50px;\n  display: block;\n}\n"

/***/ }

});
//# sourceMappingURL=app.js.map