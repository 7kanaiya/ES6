var appGlobal =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Class/classDemo.js":
/*!********************************!*\
  !*** ./src/Class/classDemo.js ***!
  \********************************/
/*! exports provided: default, classDemo2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return classDemo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"classDemo2\", function() { return classDemo2; });\n//Private Method Declaration\r\n//Symbol scope in within a file only\r\nconst privateMethodDemo = Symbol(\"privateMethodDemo\");\r\n\r\nclass classDemo{\r\n    \r\n    //Here we cant create the Global Variables\r\n    //Like ES5 the variables have to created inside the Constructor\r\n    //JS can have only one constructor default or parameterized\r\n\r\n    constructor(){\r\n\r\n        //constructor is Automatically called when the instance of class is created.\r\n        console.log(\"classDemo Constructor\");\r\n    }\r\n\r\n    //Private Method\r\n    [privateMethodDemo](){\r\n        console.log(\"Private Method Demo\");\r\n    }\r\n\r\n    //Public Method\r\n    publicMethodDemo(){\r\n\r\n        console.log(\"Public Method Demo\");\r\n\r\n        //Calling Private Method\r\n        this[privateMethodDemo]();\r\n    }\r\n\r\n}\r\n\r\nconst privateMethodDemo2 = Symbol(\"privateMethodDemo2\");\r\n\r\n//export default class classDemo2{\r\nclass classDemo2{\r\n    constructor(){\r\n        console.log(\"Constructor classDemo2\");\r\n    }\r\n\r\n    [privateMethodDemo2](){\r\n        console.log(\"Demo2 Private\");\r\n    }\r\n\r\n    publicMethodDemo2(){\r\n        console.log(\"Demo2 Public Method\");\r\n        this[privateMethodDemo2]();\r\n    }\r\n\r\n    \r\n}\n\n//# sourceURL=webpack://appGlobal/./src/Class/classDemo.js?");

/***/ }),

/***/ "./src/Class/main.js":
/*!***************************!*\
  !*** ./src/Class/main.js ***!
  \***************************/
/*! exports provided: default, onPageLoadEvent, main2, onPageLoadEvent2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return main; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onPageLoadEvent\", function() { return onPageLoadEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"main2\", function() { return main2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onPageLoadEvent2\", function() { return onPageLoadEvent2; });\n/* harmony import */ var _classDemo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classDemo */ \"./src/Class/classDemo.js\");\n\r\n\r\n\r\n\r\n//default is used to for accessibility\r\n//export used when any class or function is needed to be accessed from one file to other file.\r\n\r\nclass main{\r\n\r\n    constructor(){\r\n\r\n        console.log(\"Main Constructor\");\r\n\r\n    }\r\n\r\n    onPageLoad(){\r\n\r\n        //Creating instance of classDemo\r\n        let classDemoObj = new _classDemo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n        classDemoObj.publicMethodDemo();\r\n    }\r\n\r\n}\r\n\r\n\r\nfunction onPageLoadEvent(){\r\n\r\n    let mainObj = new main();\r\n    mainObj.onPageLoad();\r\n\r\n}\r\n\r\nclass main2{\r\n\r\n    constructor(){\r\n\r\n        console.log(\"Main2 Constructor\");\r\n\r\n    }\r\n\r\n    onPageLoad2(){\r\n        let classDemoObj2= new _classDemo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n        //classDemoObj2.publicMethodDemo2(); //classDemoObj2.publicMethodDemo2 is not a function\r\n    }\r\n\r\n}\r\n\r\nfunction onPageLoadEvent2(){\r\n    let mainObj2 = new main2();\r\n    mainObj2.onPageLoad2();\r\n}\n\n//# sourceURL=webpack://appGlobal/./src/Class/main.js?");

/***/ }),

/***/ 0:
/*!********************************************************************!*\
  !*** multi ../ES6/src/Class/classDemo.js ../ES6/src/Class/main.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../ES6/src/Class/classDemo.js */\"./src/Class/classDemo.js\");\nmodule.exports = __webpack_require__(/*! ../ES6/src/Class/main.js */\"./src/Class/main.js\");\n\n\n//# sourceURL=webpack://appGlobal/multi_../ES6/src/Class/classDemo.js_../ES6/src/Class/main.js?");

/***/ })

/******/ });