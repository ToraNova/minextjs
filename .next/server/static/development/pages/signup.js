module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./layouts/minimalist/border1.js":
/*!***************************************!*\
  !*** ./layouts/minimalist/border1.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/cjason/prodev/minextjs/layouts/minimalist/border1.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*
 * Border layout (contains component in a border)
 * centering
 */
// hyphens can be bypassed
// using java conventions
// text-align -> textAlign
const layoutStyle = {
  margin: 20,
  padding: 20,
  textAlign: 'center',
  border: '2px solid #AAA'
};

const Layout = props => __jsx("div", {
  style: layoutStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, props.children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_authser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/authser.js */ "./utils/authser.js");
/* harmony import */ var _layouts_minimalist_border1_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/minimalist/border1.js */ "./layouts/minimalist/border1.js");
var _jsxFileName = "/home/cjason/prodev/minextjs/pages/signup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/*
 * Login page
 * used for logging in
 * please refer to https://github.com/zeit/next.js/issues/153
 *
 */
//react components

 //custom imports


 //configure AuthService onto localhost:1996

const auth = new _utils_authser_js__WEBPACK_IMPORTED_MODULE_3__["default"]('http://localhost:1996');

class Signup extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (auth.loggedIn()) {
      // redirect if you're already logged in
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/profile');
    }
  }

  handleSubmit(e) {
    e.preventDefault(); // yay uncontrolled forms!

    auth.signUp(this.refs.email.value, this.refs.username.value, this.refs.password.value).then(res => {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/profile');
    }).catch(e => {
      //display login error
      if (e.response.status == 400) {
        //unauthorized (wrong creds or invalid input)
        //change the worm image
        this.refs.worm.src = "/icons/redcancel128.png";
        this.refs.status.innerHTML = "Registration failed !";
      }
    });
  }

  render() {
    return __jsx(_layouts_minimalist_border1_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2510539584" + " " + "login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("img", {
      src: "/icons/babyworm128.png",
      alt: "babyworm128.png",
      ref: "worm",
      className: "jsx-2510539584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), __jsx("h1", {
      className: "jsx-2510539584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "New Wormy"), __jsx("form", {
      onSubmit: this.handleSubmit,
      className: "jsx-2510539584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "email",
      className: "jsx-2510539584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Email Login"), __jsx("input", {
      id: "email",
      type: "text",
      ref: "email",
      className: "jsx-2510539584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), __jsx("label", {
      htmlFor: "username",
      className: "jsx-2510539584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "Username"), __jsx("input", {
      id: "username",
      type: "text",
      ref: "username",
      className: "jsx-2510539584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), __jsx("label", {
      htmlFor: "password",
      className: "jsx-2510539584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "Password"), __jsx("input", {
      id: "password",
      type: "password",
      ref: "password",
      className: "jsx-2510539584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }), __jsx("br", {
      className: "jsx-2510539584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), __jsx("label", {
      ref: "status",
      style: {
        color: '#ea3636',
        textAlign: 'right'
      },
      className: "jsx-2510539584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }), __jsx("input", {
      type: "submit",
      value: "Register",
      className: "jsx-2510539584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2510539584",
      __self: this
    }, ".login.jsx-2510539584{max-width:340px;margin:0 auto;padding:1rem;border:1px solid #ccc;border-radius:4px;}form.jsx-2510539584{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}label.jsx-2510539584{font-weight:600;}input.jsx-2510539584{padding:8px;margin:0.3rem 0 1rem;border:1px solid #ccc;border-radius:4px;}.error.jsx-2510539584{margin:0.5rem 0 0;display:none;color:brown;}.error.show.jsx-2510539584{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NqYXNvbi9wcm9kZXYvbWluZXh0anMvcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFYyxBQUdvQixBQU9ILEFBSUcsQUFHSixBQU1NLEFBS0osWUFWTyxFQVdyQixFQXpCYyxBQVdkLEVBU2EsWUFuQkEsQ0FvQkQsRUFOVSxVQWJBLEFBb0J0QixZQU5rQixVQWJBLFFBY2xCLENBVmlCLFNBSGpCLHNEQUlBIiwiZmlsZSI6Ii9ob21lL2NqYXNvbi9wcm9kZXYvbWluZXh0anMvcGFnZXMvc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIExvZ2luIHBhZ2VcbiAqIHVzZWQgZm9yIGxvZ2dpbmcgaW5cbiAqIHBsZWFzZSByZWZlciB0byBodHRwczovL2dpdGh1Yi5jb20vemVpdC9uZXh0LmpzL2lzc3Vlcy8xNTNcbiAqXG4gKi9cblxuLy9yZWFjdCBjb21wb25lbnRzXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuLy9jdXN0b20gaW1wb3J0c1xuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gJy4uL3V0aWxzL2F1dGhzZXIuanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvbWluaW1hbGlzdC9ib3JkZXIxLmpzJ1xuXG4vL2NvbmZpZ3VyZSBBdXRoU2VydmljZSBvbnRvIGxvY2FsaG9zdDoxOTk2XG5jb25zdCBhdXRoID0gbmV3IEF1dGhTZXJ2aWNlKCdodHRwOi8vbG9jYWxob3N0OjE5OTYnKVxuXG5jbGFzcyBTaWdudXAgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQgKCkge1xuXHRcdGlmIChhdXRoLmxvZ2dlZEluKCkpIHtcblx0XHRcdC8vIHJlZGlyZWN0IGlmIHlvdSdyZSBhbHJlYWR5IGxvZ2dlZCBpblxuXHRcdFx0Um91dGVyLnB1c2goJy9wcm9maWxlJylcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVTdWJtaXQgKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHQvLyB5YXkgdW5jb250cm9sbGVkIGZvcm1zIVxuXHRcdGF1dGguc2lnblVwKFxuXHRcdFx0dGhpcy5yZWZzLmVtYWlsLnZhbHVlLFxuXHRcdFx0dGhpcy5yZWZzLnVzZXJuYW1lLnZhbHVlLFxuXHRcdFx0dGhpcy5yZWZzLnBhc3N3b3JkLnZhbHVlXG5cdFx0KVxuXHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRSb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKVxuXHRcdH0pXG5cdFx0LmNhdGNoKGUgPT4ge1xuXHRcdFx0Ly9kaXNwbGF5IGxvZ2luIGVycm9yXG5cdFx0XHRpZihlLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDApe1xuXHRcdFx0XHQvL3VuYXV0aG9yaXplZCAod3JvbmcgY3JlZHMgb3IgaW52YWxpZCBpbnB1dClcblx0XHRcdFx0Ly9jaGFuZ2UgdGhlIHdvcm0gaW1hZ2Vcblx0XHRcdFx0dGhpcy5yZWZzLndvcm0uc3JjID0gXCIvaWNvbnMvcmVkY2FuY2VsMTI4LnBuZ1wiXG5cdFx0XHRcdHRoaXMucmVmcy5zdGF0dXMuaW5uZXJIVE1MID0gXCJSZWdpc3RyYXRpb24gZmFpbGVkICFcIlxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0PExheW91dD5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XG5cdFx0PGltZyBzcmM9XCIvaWNvbnMvYmFieXdvcm0xMjgucG5nXCIgYWx0PVwiYmFieXdvcm0xMjgucG5nXCIgcmVmPVwid29ybVwiIC8+XG5cdFx0PGgxPk5ldyBXb3JteTwvaDE+XG5cdFx0PGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cblxuXHRcdDxsYWJlbCBodG1sRm9yPSdlbWFpbCc+RW1haWwgTG9naW48L2xhYmVsPlxuXHRcdDxpbnB1dCBpZD1cImVtYWlsXCIgdHlwZT1cInRleHRcIiByZWY9XCJlbWFpbFwiLz5cblxuXHRcdDxsYWJlbCBodG1sRm9yPSd1c2VybmFtZSc+VXNlcm5hbWU8L2xhYmVsPlxuXHRcdDxpbnB1dCBpZD1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiByZWY9XCJ1c2VybmFtZVwiLz5cblxuXHRcdDxsYWJlbCBodG1sRm9yPSdwYXNzd29yZCc+UGFzc3dvcmQ8L2xhYmVsPlxuXHRcdDxpbnB1dCBpZD1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgcmVmPVwicGFzc3dvcmRcIi8+XG5cblx0XHQ8YnIvPlxuXHRcdDxsYWJlbCByZWY9XCJzdGF0dXNcIiBzdHlsZT17e2NvbG9yOicjZWEzNjM2JywgdGV4dEFsaWduOiAncmlnaHQnfX0+PC9sYWJlbD5cblxuXHRcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJSZWdpc3RlclwiLz5cblxuXHRcdDwvZm9ybT5cblx0XHQ8L2Rpdj5cblx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHQubG9naW4ge1xuXHRcdFx0bWF4LXdpZHRoOiAzNDBweDtcblx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0cGFkZGluZzogMXJlbTtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHR9XG5cdFx0XHRmb3JtIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRmbGV4LWZsb3c6IGNvbHVtbjtcblx0XHRcdH1cblx0XHRcdGxhYmVsIHtcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHR9XG5cdFx0XHRpbnB1dCB7XG5cdFx0XHRwYWRkaW5nOiA4cHg7XG5cdFx0XHRtYXJnaW46IDAuM3JlbSAwIDFyZW07XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0fVxuXHRcdFx0LmVycm9yIHtcblx0XHRcdG1hcmdpbjogMC41cmVtIDAgMDtcblx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRjb2xvcjogYnJvd247XG5cdFx0XHR9XG5cdFx0XHQuZXJyb3Iuc2hvdyB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdH1cblx0XHRgfTwvc3R5bGU+XG5cdFx0PC9MYXlvdXQ+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ251cFxuIl19 */\n/*@ sourceURL=/home/cjason/prodev/minextjs/pages/signup.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./utils/authser.js":
/*!**************************!*\
  !*** ./utils/authser.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthService; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);




/*
 * This is a helper utility that allows
 * authentication for pages
 * This is reusable across pages
 * The JWT token is stored as cookies
 */
//redundant but this allows me to explicitly know fetch is from this package
 //This class can be used as a service handler for login pages
//or any form of authentication

class AuthService {
  //if domain is passed, then use that else fallback to localhost:5000
  constructor(domain) {
    this.domain = domain || 'http://localhost:1996';
    this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  } //signup a user


  signUp(email, name, password) {
    return this.fetch(`${this.domain}/user/add`, {
      method: 'POST',
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({
        email,
        name,
        password
      })
    }).then(res => {
      this.setToken(res.token); //arms the token

      return this.fetch(`${this.domain}/user/profile`, {
        method: 'GET'
      });
    }).then(res => {
      this.setProfile(res);
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(res);
    });
  } // Get a token


  login(email, password) {
    return this.fetch(`${this.domain}/user/login`, {
      method: 'POST',
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({
        email,
        password
      })
    }).then(res => {
      this.setToken(res.token); //arms the token

      return this.fetch(`${this.domain}/user/profile`, {
        method: 'GET'
      });
    }).then(res => {
      this.setProfile(res);
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(res);
    });
  } // Checks if there is a saved token and it's still valid


  loggedIn() {
    //TODO : check validity of token ?
    const token = this.getToken(); //return !!token && !isTokenExpired(token) // handwaiving here

    return !!token;
  }

  setProfile(profile) {
    // Saves profile data to localStorage
    localStorage.setItem('profile', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(profile));
  }

  getProfile() {
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile');
    return profile ? JSON.parse(localStorage.profile) : {};
  } // Saves user token to localStorage


  setToken(idToken) {
    localStorage.setItem('token', idToken);
  } // Retrieves the user token from localStorage


  getToken() {
    return localStorage.getItem('token');
  } // Clear user token and profile data from localStorage
  // and logout user (from all device /all)


  logout() {
    //only proceed if the user IS logged in
    return this.fetch(`${this.domain}/user/logout/all`, {
      method: 'POST'
    }).then(res => {
      //response is 204
      console.log("Removing Storage");
      localStorage.removeItem('token');
      localStorage.removeItem('profile');
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(res);
    });
  } // raises an error in case response status is not a success


  _checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  } // performs api calls sending the required authentication headers
  // this is actually a wrapper around the 'fetch' function from
  // isomorphic fetch


  fetch(url, options) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + this.getToken();
    }

    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(url, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      headers
    }, options)).then(this._checkStatus).then(response => response.json());
  }

}

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/signup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cjason/prodev/minextjs/pages/signup.js */"./pages/signup.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=signup.js.map