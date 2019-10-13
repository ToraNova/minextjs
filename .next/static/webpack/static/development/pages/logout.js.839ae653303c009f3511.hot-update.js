webpackHotUpdate("static/development/pages/logout.js",{

/***/ "./pages/logout.js":
/*!*************************!*\
  !*** ./pages/logout.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_authser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/authser.js */ "./utils/authser.js");
/* harmony import */ var _layouts_minimalist_border1_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layouts/minimalist/border1.js */ "./layouts/minimalist/border1.js");





var _jsxFileName = "/home/cjason/prodev/minextjs/pages/logout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

/*
 * Login page
 * used for logging in
 * please refer to https://github.com/zeit/next.js/issues/153
 *
 */
//react components

 //custom service


 //configure AuthService onto localhost:1996

var auth = new _utils_authser_js__WEBPACK_IMPORTED_MODULE_7__["default"]('http://localhost:1996');

var Logout =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Logout, _Component);

  function Logout(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Logout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Logout).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Logout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //logout the user
      auth.logout().then(function (res) {
        //redirect to index page
        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');
      })["catch"](function (e) {
        //error occurred
        switch (e.response.status) {
          case 401:
            //user not logged in. don't do anything
            break;

          case 500:
            //back-end error, logout user from device anyways
            localStorage.removeItem('token');
            localStorage.removeItem('profile');
            break;

          default:
            //unknown error do not logout first
            //TODO: figure out what do properly do here
            //redirect back to login for now
            next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/login');
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "REDIRECTING...."));
    }
  }]);

  return Logout;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Logout);

/***/ })

})
//# sourceMappingURL=logout.js.839ae653303c009f3511.hot-update.js.map