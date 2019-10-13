webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
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
/* harmony import */ var _utils_authser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/authser.js */ "./utils/authser.js");
/* harmony import */ var _layouts_minimalist_border1_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layouts/minimalist/border1.js */ "./layouts/minimalist/border1.js");






var _jsxFileName = "/home/cjason/prodev/minextjs/pages/signup.js";

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

var auth = new _utils_authser_js__WEBPACK_IMPORTED_MODULE_9__["default"]('http://localhost:1996');

var Signup =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Signup, _Component);

  function Signup(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Signup);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Signup).call(this, props));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Signup, [{
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

      auth.signUp(this.refs.email.value, this.refs.username.value, this.refs.password.value).then(function (res) {
        next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/profile');
      })["catch"](function (e) {
        //display login error
        if (e.response.status == 400) {
          //unauthorized (wrong creds or invalid input)
          //change the worm image
          _this2.refs.worm.src = "/icons/redcancel128.png";
          _this2.refs.status.innerHTML = "Registration failed !";
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_layouts_minimalist_border1_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2510539584",
        __self: this
      }, ".login.jsx-2510539584{max-width:340px;margin:0 auto;padding:1rem;border:1px solid #ccc;border-radius:4px;}form.jsx-2510539584{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}label.jsx-2510539584{font-weight:600;}input.jsx-2510539584{padding:8px;margin:0.3rem 0 1rem;border:1px solid #ccc;border-radius:4px;}.error.jsx-2510539584{margin:0.5rem 0 0;display:none;color:brown;}.error.show.jsx-2510539584{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NqYXNvbi9wcm9kZXYvbWluZXh0anMvcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFYyxBQUdvQixBQU9ILEFBSUcsQUFHSixBQU1NLEFBS0osWUFWTyxFQVdyQixFQXpCYyxBQVdkLEVBU2EsWUFuQkEsQ0FvQkQsRUFOVSxVQWJBLEFBb0J0QixZQU5rQixVQWJBLFFBY2xCLENBVmlCLFNBSGpCLHNEQUlBIiwiZmlsZSI6Ii9ob21lL2NqYXNvbi9wcm9kZXYvbWluZXh0anMvcGFnZXMvc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIExvZ2luIHBhZ2VcbiAqIHVzZWQgZm9yIGxvZ2dpbmcgaW5cbiAqIHBsZWFzZSByZWZlciB0byBodHRwczovL2dpdGh1Yi5jb20vemVpdC9uZXh0LmpzL2lzc3Vlcy8xNTNcbiAqXG4gKi9cblxuLy9yZWFjdCBjb21wb25lbnRzXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuLy9jdXN0b20gaW1wb3J0c1xuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gJy4uL3V0aWxzL2F1dGhzZXIuanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvbWluaW1hbGlzdC9ib3JkZXIxLmpzJ1xuXG4vL2NvbmZpZ3VyZSBBdXRoU2VydmljZSBvbnRvIGxvY2FsaG9zdDoxOTk2XG5jb25zdCBhdXRoID0gbmV3IEF1dGhTZXJ2aWNlKCdodHRwOi8vbG9jYWxob3N0OjE5OTYnKVxuXG5jbGFzcyBTaWdudXAgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQgKCkge1xuXHRcdGlmIChhdXRoLmxvZ2dlZEluKCkpIHtcblx0XHRcdC8vIHJlZGlyZWN0IGlmIHlvdSdyZSBhbHJlYWR5IGxvZ2dlZCBpblxuXHRcdFx0Um91dGVyLnB1c2goJy9wcm9maWxlJylcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVTdWJtaXQgKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHQvLyB5YXkgdW5jb250cm9sbGVkIGZvcm1zIVxuXHRcdGF1dGguc2lnblVwKFxuXHRcdFx0dGhpcy5yZWZzLmVtYWlsLnZhbHVlLFxuXHRcdFx0dGhpcy5yZWZzLnVzZXJuYW1lLnZhbHVlLFxuXHRcdFx0dGhpcy5yZWZzLnBhc3N3b3JkLnZhbHVlXG5cdFx0KVxuXHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRSb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKVxuXHRcdH0pXG5cdFx0LmNhdGNoKGUgPT4ge1xuXHRcdFx0Ly9kaXNwbGF5IGxvZ2luIGVycm9yXG5cdFx0XHRpZihlLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDApe1xuXHRcdFx0XHQvL3VuYXV0aG9yaXplZCAod3JvbmcgY3JlZHMgb3IgaW52YWxpZCBpbnB1dClcblx0XHRcdFx0Ly9jaGFuZ2UgdGhlIHdvcm0gaW1hZ2Vcblx0XHRcdFx0dGhpcy5yZWZzLndvcm0uc3JjID0gXCIvaWNvbnMvcmVkY2FuY2VsMTI4LnBuZ1wiXG5cdFx0XHRcdHRoaXMucmVmcy5zdGF0dXMuaW5uZXJIVE1MID0gXCJSZWdpc3RyYXRpb24gZmFpbGVkICFcIlxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0PExheW91dD5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XG5cdFx0PGltZyBzcmM9XCIvaWNvbnMvYmFieXdvcm0xMjgucG5nXCIgYWx0PVwiYmFieXdvcm0xMjgucG5nXCIgcmVmPVwid29ybVwiIC8+XG5cdFx0PGgxPk5ldyBXb3JteTwvaDE+XG5cdFx0PGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cblxuXHRcdDxsYWJlbCBodG1sRm9yPSdlbWFpbCc+RW1haWwgTG9naW48L2xhYmVsPlxuXHRcdDxpbnB1dCBpZD1cImVtYWlsXCIgdHlwZT1cInRleHRcIiByZWY9XCJlbWFpbFwiLz5cblxuXHRcdDxsYWJlbCBodG1sRm9yPSd1c2VybmFtZSc+VXNlcm5hbWU8L2xhYmVsPlxuXHRcdDxpbnB1dCBpZD1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiByZWY9XCJ1c2VybmFtZVwiLz5cblxuXHRcdDxsYWJlbCBodG1sRm9yPSdwYXNzd29yZCc+UGFzc3dvcmQ8L2xhYmVsPlxuXHRcdDxpbnB1dCBpZD1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgcmVmPVwicGFzc3dvcmRcIi8+XG5cblx0XHQ8YnIvPlxuXHRcdDxsYWJlbCByZWY9XCJzdGF0dXNcIiBzdHlsZT17e2NvbG9yOicjZWEzNjM2JywgdGV4dEFsaWduOiAncmlnaHQnfX0+PC9sYWJlbD5cblxuXHRcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJSZWdpc3RlclwiLz5cblxuXHRcdDwvZm9ybT5cblx0XHQ8L2Rpdj5cblx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHQubG9naW4ge1xuXHRcdFx0bWF4LXdpZHRoOiAzNDBweDtcblx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0cGFkZGluZzogMXJlbTtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHR9XG5cdFx0XHRmb3JtIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRmbGV4LWZsb3c6IGNvbHVtbjtcblx0XHRcdH1cblx0XHRcdGxhYmVsIHtcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHR9XG5cdFx0XHRpbnB1dCB7XG5cdFx0XHRwYWRkaW5nOiA4cHg7XG5cdFx0XHRtYXJnaW46IDAuM3JlbSAwIDFyZW07XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0fVxuXHRcdFx0LmVycm9yIHtcblx0XHRcdG1hcmdpbjogMC41cmVtIDAgMDtcblx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0XHRjb2xvcjogYnJvd247XG5cdFx0XHR9XG5cdFx0XHQuZXJyb3Iuc2hvdyB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdH1cblx0XHRgfTwvc3R5bGU+XG5cdFx0PC9MYXlvdXQ+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ251cFxuIl19 */\n/*@ sourceURL=/home/cjason/prodev/minextjs/pages/signup.js */"));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ })

})
//# sourceMappingURL=signup.js.ae2db3e99437e62d2299.hot-update.js.map