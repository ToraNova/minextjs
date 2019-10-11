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

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_authser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/authser.js */ "./utils/authser.js");
/* harmony import */ var _layouts_minimalist_border1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/minimalist/border1.js */ "./layouts/minimalist/border1.js");
var _jsxFileName = "/home/cjason/prodev/minextjs/pages/login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/*
 * Login page
 * used for logging in
 * please refer to https://github.com/zeit/next.js/issues/153
 *
 */
//react components
 //custom service


 //configure AuthService onto localhost:1996

const auth = new _utils_authser_js__WEBPACK_IMPORTED_MODULE_2__["default"]('http://localhost:1996');

class Login extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (auth.loggedIn()) {
      // redirect if you're already logged in
      this.props.url.replaceTo('/profile');
    }
  }

  handleSubmit(e) {
    e.preventDefault(); // yay uncontrolled forms!

    auth.login(this.refs.email.value, this.refs.password.value).then(res => {
      console.log(res);
      this.props.url.replaceTo('/profile');
    }).catch(e => {
      console.log(e);
    });
  }

  render() {
    return __jsx(_layouts_minimalist_border1_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2510539584" + " " + "login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("img", {
      src: "/worm128.png",
      alt: "worm128.png",
      className: "jsx-2510539584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), __jsx("h1", {
      className: "jsx-2510539584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Wormy"), __jsx("form", {
      onSubmit: this.handleSubmit,
      className: "jsx-2510539584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "email",
      className: "jsx-2510539584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Email Login"), __jsx("input", {
      id: "email",
      type: "text",
      ref: "email",
      className: "jsx-2510539584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), __jsx("label", {
      htmlFor: "password",
      className: "jsx-2510539584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Password"), __jsx("input", {
      id: "password",
      type: "password",
      ref: "password",
      className: "jsx-2510539584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), __jsx("input", {
      type: "submit",
      value: "Login",
      className: "jsx-2510539584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2510539584",
      __self: this
    }, ".login.jsx-2510539584{max-width:340px;margin:0 auto;padding:1rem;border:1px solid #ccc;border-radius:4px;}form.jsx-2510539584{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}label.jsx-2510539584{font-weight:600;}input.jsx-2510539584{padding:8px;margin:0.3rem 0 1rem;border:1px solid #ccc;border-radius:4px;}.error.jsx-2510539584{margin:0.5rem 0 0;display:none;color:brown;}.error.show.jsx-2510539584{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NqYXNvbi9wcm9kZXYvbWluZXh0anMvcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOERjLEFBR29CLEFBT0gsQUFJRyxBQUdKLEFBTU0sQUFLSixZQVZPLEVBV3JCLEVBekJjLEFBV2QsRUFTYSxZQW5CQSxDQW9CRCxFQU5VLFVBYkEsQUFvQnRCLFlBTmtCLFVBYkEsUUFjbEIsQ0FWaUIsU0FIakIsc0RBSUEiLCJmaWxlIjoiL2hvbWUvY2phc29uL3Byb2Rldi9taW5leHRqcy9wYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMb2dpbiBwYWdlXG4gKiB1c2VkIGZvciBsb2dnaW5nIGluXG4gKiBwbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcy9pc3N1ZXMvMTUzXG4gKlxuICovXG5cbi8vcmVhY3QgY29tcG9uZW50c1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcblxuLy9jdXN0b20gc2VydmljZVxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gJy4uL3V0aWxzL2F1dGhzZXIuanMnXG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9taW5pbWFsaXN0L2JvcmRlcjEuanMnXG5cbi8vY29uZmlndXJlIEF1dGhTZXJ2aWNlIG9udG8gbG9jYWxob3N0OjE5OTZcbmNvbnN0IGF1dGggPSBuZXcgQXV0aFNlcnZpY2UoJ2h0dHA6Ly9sb2NhbGhvc3Q6MTk5NicpXG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcylcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50ICgpIHtcblx0XHRpZiAoYXV0aC5sb2dnZWRJbigpKSB7XG5cdFx0XHQvLyByZWRpcmVjdCBpZiB5b3UncmUgYWxyZWFkeSBsb2dnZWQgaW5cblx0XHRcdHRoaXMucHJvcHMudXJsLnJlcGxhY2VUbygnL3Byb2ZpbGUnKVxuXHRcdH1cblx0fVxuXG5cdGhhbmRsZVN1Ym1pdCAoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdC8vIHlheSB1bmNvbnRyb2xsZWQgZm9ybXMhXG5cdFx0YXV0aC5sb2dpbih0aGlzLnJlZnMuZW1haWwudmFsdWUsIHRoaXMucmVmcy5wYXNzd29yZC52YWx1ZSlcblx0XHQudGhlbihyZXMgPT4ge1xuXHRcdGNvbnNvbGUubG9nKHJlcylcblx0XHR0aGlzLnByb3BzLnVybC5yZXBsYWNlVG8oJy9wcm9maWxlJylcblx0XHR9KVxuXHRcdC5jYXRjaChlID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGUpXG5cdFx0fSlcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHQ8TGF5b3V0PlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibG9naW5cIj5cblx0XHQ8aW1nIHNyYz1cIi93b3JtMTI4LnBuZ1wiIGFsdD1cIndvcm0xMjgucG5nXCIgLz5cblx0XHQ8aDE+V29ybXk8L2gxPlxuXHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG5cblx0XHQ8bGFiZWwgaHRtbEZvcj0nZW1haWwnPkVtYWlsIExvZ2luPC9sYWJlbD5cblx0XHQ8aW5wdXQgaWQ9XCJlbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgcmVmPVwiZW1haWxcIi8+XG5cblx0XHQ8bGFiZWwgaHRtbEZvcj0ncGFzc3dvcmQnPlBhc3N3b3JkPC9sYWJlbD5cblx0XHQ8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHJlZj1cInBhc3N3b3JkXCIvPlxuXG5cdFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZ2luXCIvPlxuXG5cdFx0PC9mb3JtPlxuXHRcdDwvZGl2PlxuXHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdC5sb2dpbiB7XG5cdFx0XHRtYXgtd2lkdGg6IDM0MHB4O1xuXHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRwYWRkaW5nOiAxcmVtO1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcblx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdH1cblx0XHRcdGZvcm0ge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZmxvdzogY29sdW1uO1xuXHRcdFx0fVxuXHRcdFx0bGFiZWwge1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdH1cblx0XHRcdGlucHV0IHtcblx0XHRcdHBhZGRpbmc6IDhweDtcblx0XHRcdG1hcmdpbjogMC4zcmVtIDAgMXJlbTtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHR9XG5cdFx0XHQuZXJyb3Ige1xuXHRcdFx0bWFyZ2luOiAwLjVyZW0gMCAwO1xuXHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHRcdGNvbG9yOiBicm93bjtcblx0XHRcdH1cblx0XHRcdC5lcnJvci5zaG93IHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0fVxuXHRcdGB9PC9zdHlsZT5cblx0XHQ8L0xheW91dD5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5cbiJdfQ== */\n/*@ sourceURL=/home/cjason/prodev/minextjs/pages/login.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Login);

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




/*
 * This is a helper utility that allows
 * authentication for pages
 * This is reusable across pages
 * The JWT token is stored as cookies
 */
//This class can be used as a service handler for login pages
//or any form of authentication
class AuthService {
  //if domain is passed, then use that else fallback to localhost:5000
  constructor(domain) {
    this.domain = domain || 'http://localhost:1996';
    this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
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


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
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


  fetch(url, options) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + this.getToken();
    }

    return fetch(url, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      headers
    }, options)).then(this._checkStatus).then(response => response.json());
  }

}

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cjason/prodev/minextjs/pages/login.js */"./pages/login.js");


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
//# sourceMappingURL=login.js.map