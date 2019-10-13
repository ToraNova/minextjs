webpackHotUpdate("static/development/pages/login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_authser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/authser.js */ "./utils/authser.js");
/* harmony import */ var _layouts_minimalist_border1_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../layouts/minimalist/border1.js */ "./layouts/minimalist/border1.js");






var _jsxFileName = "/home/cjason/prodev/minextjs/pages/login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

/*
 * Login page
 * used for logging in
 * please refer to https://github.com/zeit/next.js/issues/153
 *
 */
//react components


 //custom imports


 //configure AuthService onto localhost:1996

var auth = new _utils_authser_js__WEBPACK_IMPORTED_MODULE_10__["default"]('http://localhost:1996');

var Login =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Login, _Component);

  function Login(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Login);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Login).call(this, props));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Login, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (auth.loggedIn()) {
        // redirect if you're already logged in
        next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/profile');
      }
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault(); // yay uncontrolled forms!

      auth.login(this.refs.email.value, this.refs.password.value).then(function (res) {
        next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/profile');
      })["catch"](function (e) {
        //display login error
        if (e.response && e.response.status == 401) {
          //unauthorized (wrong creds or invalid input)
          //change the worm image
          _this2.refs.worm.src = "/icons/worm128-o.png";
          _this2.refs.status.innerHTML = "Invalid credentials !";
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_layouts_minimalist_border1_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2510539584" + " " + "login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("img", {
        src: "/icons/worm128.png",
        alt: "worm128.png",
        ref: "worm",
        className: "jsx-2510539584",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), __jsx("h1", {
        className: "jsx-2510539584",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Wormy"), __jsx("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-2510539584",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "email",
        className: "jsx-2510539584",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Email Login"), __jsx("input", {
        id: "email",
        type: "text",
        ref: "email",
        className: "jsx-2510539584",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), __jsx("label", {
        htmlFor: "password",
        className: "jsx-2510539584",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Password"), __jsx("input", {
        id: "password",
        type: "password",
        ref: "password",
        className: "jsx-2510539584",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), __jsx("input", {
        type: "submit",
        value: "Login",
        className: "jsx-2510539584",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-2510539584",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
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
          lineNumber: 68
        },
        __self: this
      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-2510539584",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Signup")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2510539584",
        __self: this
      }, ".login.jsx-2510539584{max-width:340px;margin:0 auto;padding:1rem;border:1px solid #ccc;border-radius:4px;}form.jsx-2510539584{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}label.jsx-2510539584{font-weight:600;}input.jsx-2510539584{padding:8px;margin:0.3rem 0 1rem;border:1px solid #ccc;border-radius:4px;}.error.jsx-2510539584{margin:0.5rem 0 0;display:none;color:brown;}.error.show.jsx-2510539584{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NqYXNvbi9wcm9kZXYvbWluZXh0anMvcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VjLEFBR29CLEFBT0gsQUFJRyxBQUdKLEFBTU0sQUFLSixZQVZPLEVBV3JCLEVBekJjLEFBV2QsRUFTYSxZQW5CQSxDQW9CRCxFQU5VLFVBYkEsQUFvQnRCLFlBTmtCLFVBYkEsUUFjbEIsQ0FWaUIsU0FIakIsc0RBSUEiLCJmaWxlIjoiL2hvbWUvY2phc29uL3Byb2Rldi9taW5leHRqcy9wYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBMb2dpbiBwYWdlXG4gKiB1c2VkIGZvciBsb2dnaW5nIGluXG4gKiBwbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcy9pc3N1ZXMvMTUzXG4gKlxuICovXG5cbi8vcmVhY3QgY29tcG9uZW50c1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG4vL2N1c3RvbSBpbXBvcnRzXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSAnLi4vdXRpbHMvYXV0aHNlci5qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9taW5pbWFsaXN0L2JvcmRlcjEuanMnXG5cbi8vY29uZmlndXJlIEF1dGhTZXJ2aWNlIG9udG8gbG9jYWxob3N0OjE5OTZcbmNvbnN0IGF1dGggPSBuZXcgQXV0aFNlcnZpY2UoJ2h0dHA6Ly9sb2NhbGhvc3Q6MTk5NicpXG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcylcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50ICgpIHtcblx0XHRpZiAoYXV0aC5sb2dnZWRJbigpKSB7XG5cdFx0XHQvLyByZWRpcmVjdCBpZiB5b3UncmUgYWxyZWFkeSBsb2dnZWQgaW5cblx0XHRcdFJvdXRlci5wdXNoKCcvcHJvZmlsZScpXG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlU3VibWl0IChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Ly8geWF5IHVuY29udHJvbGxlZCBmb3JtcyFcblx0XHRhdXRoLmxvZ2luKHRoaXMucmVmcy5lbWFpbC52YWx1ZSwgdGhpcy5yZWZzLnBhc3N3b3JkLnZhbHVlKVxuXHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRSb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKVxuXHRcdH0pXG5cdFx0LmNhdGNoKGUgPT4ge1xuXHRcdFx0Ly9kaXNwbGF5IGxvZ2luIGVycm9yXG5cdFx0XHRpZiggZS5yZXNwb25zZSAmJiBlLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpe1xuXHRcdFx0XHQvL3VuYXV0aG9yaXplZCAod3JvbmcgY3JlZHMgb3IgaW52YWxpZCBpbnB1dClcblx0XHRcdFx0Ly9jaGFuZ2UgdGhlIHdvcm0gaW1hZ2Vcblx0XHRcdFx0dGhpcy5yZWZzLndvcm0uc3JjID0gXCIvaWNvbnMvd29ybTEyOC1vLnBuZ1wiXG5cdFx0XHRcdHRoaXMucmVmcy5zdGF0dXMuaW5uZXJIVE1MID0gXCJJbnZhbGlkIGNyZWRlbnRpYWxzICFcIlxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0PExheW91dD5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XG5cdFx0PGltZyBzcmM9XCIvaWNvbnMvd29ybTEyOC5wbmdcIiBhbHQ9XCJ3b3JtMTI4LnBuZ1wiIHJlZj1cIndvcm1cIi8+XG5cdFx0PGgxPldvcm15PC9oMT5cblx0XHQ8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuXG5cdFx0PGxhYmVsIGh0bWxGb3I9J2VtYWlsJz5FbWFpbCBMb2dpbjwvbGFiZWw+XG5cdFx0PGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIHJlZj1cImVtYWlsXCIvPlxuXG5cdFx0PGxhYmVsIGh0bWxGb3I9J3Bhc3N3b3JkJz5QYXNzd29yZDwvbGFiZWw+XG5cdFx0PGlucHV0IGlkPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiByZWY9XCJwYXNzd29yZFwiLz5cblxuXHRcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMb2dpblwiLz5cblxuXHRcdDxici8+XG5cdFx0PGxhYmVsIHJlZj1cInN0YXR1c1wiIHN0eWxlPXt7Y29sb3I6JyNlYTM2MzYnLCB0ZXh0QWxpZ246ICdyaWdodCd9fT48L2xhYmVsPlxuXG5cdFx0PExpbmsgaHJlZj1cIi9zaWdudXBcIj48YSA+U2lnbnVwPC9hPjwvTGluaz5cblx0XHQ8L2Zvcm0+XG5cdFx0PC9kaXY+XG5cdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0LmxvZ2luIHtcblx0XHRcdG1heC13aWR0aDogMzQwcHg7XG5cdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdHBhZGRpbmc6IDFyZW07XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0fVxuXHRcdFx0Zm9ybSB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0ZmxleC1mbG93OiBjb2x1bW47XG5cdFx0XHR9XG5cdFx0XHRsYWJlbCB7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0fVxuXHRcdFx0aW5wdXQge1xuXHRcdFx0cGFkZGluZzogOHB4O1xuXHRcdFx0bWFyZ2luOiAwLjNyZW0gMCAxcmVtO1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcblx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdH1cblx0XHRcdC5lcnJvciB7XG5cdFx0XHRtYXJnaW46IDAuNXJlbSAwIDA7XG5cdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0Y29sb3I6IGJyb3duO1xuXHRcdFx0fVxuXHRcdFx0LmVycm9yLnNob3cge1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHR9XG5cdFx0YH08L3N0eWxlPlxuXHRcdDwvTGF5b3V0PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblxuIl19 */\n/*@ sourceURL=/home/cjason/prodev/minextjs/pages/login.js */"));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.266ecbd52cf2f2f3cff4.hot-update.js.map