webpackHotUpdate("static/development/pages/logout.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);






/*
 * This is a helper utility that allows
 * authentication for pages
 * This is reusable across pages
 * The JWT token is stored as cookies
 */
//redundant but this allows me to explicitly know fetch is from this package
 //This class can be used as a service handler for login pages
//or any form of authentication

var AuthService =
/*#__PURE__*/
function () {
  //if domain is passed, then use that else fallback to localhost:5000
  function AuthService(domain) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AuthService);

    this.domain = domain || 'http://localhost:1996';
    this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  } //signup a user


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AuthService, [{
    key: "signUp",
    value: function signUp(email, name, password) {
      var _this = this;

      return this.fetch("".concat(this.domain, "/user/add"), {
        method: 'POST',
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({
          email: email,
          name: name,
          password: password
        })
      }).then(function (res) {
        _this.setToken(res.token); //arms the token


        return _this.fetch("".concat(_this.domain, "/user/profile"), {
          method: 'GET'
        });
      }).then(function (res) {
        _this.setProfile(res);

        return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(res);
      });
    } // Get a token

  }, {
    key: "login",
    value: function login(email, password) {
      var _this2 = this;

      return this.fetch("".concat(this.domain, "/user/login"), {
        method: 'POST',
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({
          email: email,
          password: password
        })
      }).then(function (res) {
        _this2.setToken(res.token); //arms the token


        return _this2.fetch("".concat(_this2.domain, "/user/profile"), {
          method: 'GET'
        });
      }).then(function (res) {
        _this2.setProfile(res);

        return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(res);
      });
    } // Checks if there is a saved token and it's still valid

  }, {
    key: "loggedIn",
    value: function loggedIn() {
      //TODO : check validity of token ?
      var token = this.getToken(); //return !!token && !isTokenExpired(token) // handwaiving here

      return !!token;
    }
  }, {
    key: "setProfile",
    value: function setProfile(profile) {
      // Saves profile data to localStorage
      localStorage.setItem('profile', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(profile));
    }
  }, {
    key: "getProfile",
    value: function getProfile() {
      // Retrieves the profile data from localStorage
      var profile = localStorage.getItem('profile');
      return profile ? JSON.parse(localStorage.profile) : {};
    } // Saves user token to localStorage

  }, {
    key: "setToken",
    value: function setToken(idToken) {
      localStorage.setItem('token', idToken);
    } // Retrieves the user token from localStorage

  }, {
    key: "getToken",
    value: function getToken() {
      return localStorage.getItem('token');
    } // Clear user token and profile data from localStorage
    // and logout user (from all device /all)

  }, {
    key: "logout",
    value: function logout() {
      //only proceed if the user IS logged in
      return this.fetch("".concat(this.domain, "/user/logout/all"), {
        method: 'POST'
      }).then(function (res) {
        //response is 204
        console.log("Removing Storage");
        localStorage.removeItem('token');
        localStorage.removeItem('profile');
        return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(res);
      });
    } // raises an error in case response status is not a success

  }, {
    key: "_checkStatus",
    value: function _checkStatus(response) {
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

  }, {
    key: "fetch",
    value: function fetch(url, options) {
      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      if (this.loggedIn()) {
        headers['Authorization'] = 'Bearer ' + this.getToken();
      }

      return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(url, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        headers: headers
      }, options)).then(this._checkStatus).then(function (response) {
        return response.json();
      });
    }
  }]);

  return AuthService;
}();



/***/ })

})
//# sourceMappingURL=logout.js.8d39bbaa023fba5aeb71.hot-update.js.map