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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout/footer.js":
/*!*************************************!*\
  !*** ./components/layout/footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/xiaohuangyu/work/egg-ams/fanyongdou/components/layout/footer.js";


var Footer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Footer, _Component);

  function Footer() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        className: "footer",
        role: "contentinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "region region-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
        role: "navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "visually-hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "Footer menu"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "footer-menu-info full-screen-width-bar clearfix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "footer-menu-list nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/map",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "\u7F51\u70B9\u5730\u56FE")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/village-banks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "\u5B89\u5168\u4FDD\u969C")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/node/563",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "\u8FD4\u4F63\u8C46\u9645\u51C6")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/safety-edu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "\u6295\u8D44\u6559\u80B2")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/recruitment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "\u4EBA\u624D\u62DB\u8058")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/perchance-paltform",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "\u91C7\u8D2D\u5E73\u53F0")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/aboutus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "\u5173\u4E8E\u6211\u4EEC")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/download",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "\u4E0B\u8F7D\u4E2D\u5FC3")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container footer-middle-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "contacts-phone-bank row animated",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-8 sub-footer-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "sub-footer-info-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "\u8054\u7CFB\u65B9\u5F0F"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "contacts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "\u5168\u56FD\u670D\u52A1\u70ED\u7EBF\uFF1A", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "phone-number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "4001961200")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "\u6DF1\u5733\u670D\u52A1\u70ED\u7EBF\uFF1A", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "phone-number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "961200")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "\u5883\u5916\u670D\u52A1\u70ED\u7EBF\uFF1A", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "phone-number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "86-755-961200"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "\u6295\u8BC9\u7535\u8BDD\uFF1A0755-25188888"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "\u6295\u8BC9\u90AE\u7BB1\uFF1Aonline@4001961200.com"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "\u8FDD\u6CD5\u4E3E\u62A5\u90AE\u7BB1\uFF1Asunlight@4001961200.com")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "\u603B\u884C\u5730\u5740\uFF1A\u6DF1\u5733\u5E02\u7F57\u6E56\u533A\u6DF1\u5357\u4E1C\u8DEF3038\u53F7\u5408\u4F5C\u91D1\u878D\u5927\u53A6")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-4 sub-footer-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "sub-footer-info-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "\u624B\u673A\u94F6\u884C"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "phone-bank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-3 col-xs-3 phone-bank-item hover-pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "QR-code",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/themes/szrcb/images/QR/QR-phone-bank.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "arrow-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "inner-arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        "data-region": "footer",
        className: "bank-enter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "icon logo icon-phone-footer-person ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "\u4E2A\u4EBA\u624B\u673A\u94F6\u884C")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-3 col-xs-3 phone-bank-item hover-pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "QR-code",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/themes/szrcb/images/QR/QR-phone-bank-enterprise.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "arrow-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "inner-arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bank-enter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "icon logo icon-phone-footer-business ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "\u4F01\u4E1A\u624B\u673A\u94F6\u884C")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-3 col-xs-3 phone-bank-item hover-pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "QR-code",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/themes/szrcb/images/QR/QR-wechat-bank.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "arrow-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "inner-arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        "data-region": "footer",
        className: "bank-enter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "icon logo icon-wechat-30 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "\u5FAE\u4FE1\u94F6\u884C")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-3 col-xs-3 phone-bank-item hover-pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bank-enter more-apps",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "icon logo icon-more-footer ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "\u66F4\u591AAPP"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "phone-bank-expanded animated",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "sub-footer-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "sub-footer-info-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "\u624B\u673A\u94F6\u884C"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-6 col-xs-12 phone-bank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-2 col-xs-3 phone-bank-item hover-pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "QR-code",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/themes/szrcb/images/QR/QR-phone-bank.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "arrow-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "inner-arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bank-enter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "icon logo icon-phone-footer-person",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "\u4E2A\u4EBA\u624B\u673A\u94F6\u884C")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-2 col-xs-3 phone-bank-item hover-pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "QR-code",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/themes/szrcb/images/QR/QR-phone-bank-enterprise.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "arrow-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "inner-arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bank-enter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "icon logo icon-phone-footer-business",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, "\u4F01\u4E1A\u624B\u673A\u94F6\u884C")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-2 col-xs-3 phone-bank-item hover-pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "QR-code",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/themes/szrcb/images/QR/QR-tiny-finance.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "arrow-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "inner-arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bank-enter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "icon logo icon-phone-micro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, "\u4FE1\u901A\u5C0F\u5FAE\u91D1\u878D")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-2 col-xs-3 phone-bank-item hover-pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "QR-code",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/themes/szrcb/images/QR/QR-credit-card.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "arrow-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "inner-arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bank-enter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "icon logo icon-card-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, "\u4FE1\u7528\u5361APP")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-2 col-xs-3 phone-bank-item hover-pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "QR-code",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/themes/szrcb/images/QR/QR-wechat-bank.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "arrow-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "inner-arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bank-enter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "icon logo icon-wechat-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "\u5B98\u65B9\u5FAE\u4FE1"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-1 col-xs-3 phone-bank-item hover-pointer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bank-enter return",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "icon logo icon-return-red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, "\u8FD4\u56DE"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "footer-bottom-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-5 sub-footer-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
        className: "select-style",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "simple",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, "\u7B80\u4F53"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "complex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, "\u7E41\u4F53")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/safety-instructions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, "\u5B89\u5168\u8BF4\u660E"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/website-stated",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, "\u7F51\u7AD9\u58F0\u660E"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/privacy-confidentiality",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, "\u9690\u79C1\u4FDD\u5BC6\u6761\u6B3E"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/problem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, "FAQ"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "customer-service-link",
        href: "javascript:;",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, "\u5728\u7EBF\u5BA2\u670D")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-7 sub-footer-info licence",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "icon logo icon-logo-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, "\u8FD4\u4F63\u8C46\u7248\u6743\u6240\u6709"), " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "licence-icp-record",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        target: "_blank",
        href: "http://www.miibeian.gov.cn/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, "\u7CA4ICP\u590705115030\u53F7")), " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        target: "_blank",
        href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030302000298",
        className: "licence-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/themes/szrcb/images/police.jpg",
        className: "record-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "licence-police",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, "\u7CA4\u516C\u7F51\u5B89\u5907 44030302000298\u53F7")), " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        target: "_blank",
        href: "http://szcert.ebs.org.cn/61b7c07c-1bcf-4acb-99dd-bdee447127fb",
        className: "licence-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/themes/szrcb/images/net.jpg",
        className: "record-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      })), " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        target: "_blank",
        href: "http://61.144.227.239:9002/",
        className: "licence-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/themes/szrcb/images/report.jpg",
        className: "record-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      })), " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        target: "_blank",
        href: "http://si.trustutn.org/info?sn=205170913030374326148&certType=1",
        className: "licence-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/themes/szrcb/images/authentication.jpg",
        className: "record-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }))))))))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./components/layout/header/defaultHeader.js":
/*!***************************************************!*\
  !*** ./components/layout/header/defaultHeader.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultHeader; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _menus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menus */ "./components/layout/header/menus.js");
/* harmony import */ var _loginBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loginBtn */ "./components/layout/header/loginBtn.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/xiaohuangyu/work/egg-ams/fanyongdou/components/layout/header/defaultHeader.js";





var DefaultHeader =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DefaultHeader, _Component);

  function DefaultHeader() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DefaultHeader);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DefaultHeader).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DefaultHeader, [{
    key: "render",
    value: function render() {
      var active = this.props.active;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("header", {
        className: "in-header default-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "header-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "header-logo-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "header-top-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "header-nav-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, _menus__WEBPACK_IMPORTED_MODULE_7__["default"].map(function (it, key) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          className: "header-nav-item",
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          href: it.path,
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()({
            active: it.index === active
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, it.name));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        className: "header-item-line",
        style: {
          opacity: '0',
          width: '51px',
          left: '216px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "header-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_loginBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })));
    }
  }]);

  return DefaultHeader;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(DefaultHeader, "defaultProps", {
  active: 1
});



/***/ }),

/***/ "./components/layout/header/indexHeader.js":
/*!*************************************************!*\
  !*** ./components/layout/header/indexHeader.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexHeader; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _menus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menus */ "./components/layout/header/menus.js");
/* harmony import */ var _loginBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loginBtn */ "./components/layout/header/loginBtn.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/xiaohuangyu/work/egg-ams/fanyongdou/components/layout/header/indexHeader.js";





var IndexHeader =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(IndexHeader, _Component);

  function IndexHeader() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IndexHeader);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(IndexHeader).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(IndexHeader, [{
    key: "render",
    value: function render() {
      var active = this.props.active;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("header", {
        className: "in-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "header-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "/",
        className: "router-link-active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "header-logo-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "header-top-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "header-nav-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, _menus__WEBPACK_IMPORTED_MODULE_7__["default"].map(function (it, key) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          className: "header-nav-item",
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          href: it.path,
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()({
            active: it.index === active
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, it.name));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        className: "header-item-line",
        style: {
          opacity: '0',
          width: '51px',
          left: '216px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "header-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_loginBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "banner-title ta-c",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "\u8FD4\u4F63\u6765\u5BA2"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "subtitle ta-c",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "\u5927\u5B97\u5546\u54C1\u6570\u636E\u4E0E\u7528\u6237\u6D1E\u5BDF\u9A71\u52A8\u7684\u8425\u9500\u4E91\u5E73\u53F0 \u63D0\u4F9B\u7CBE\u51C6\u83B7\u5BA2\u4E0E\u7528\u6237\u4EF7\u503C\u5EF6\u4F38\u6316\u6398\u7684\u4E00\u7AD9\u5F0F\u89E3\u51B3\u65B9\u6848"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "banner-btn pr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://jddsp.jd.com/adhelper",
        target: "_blank",
        className: "login-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "\u5728\u7EBF\u5F00\u6237"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/images/power-icon-arrow.png",
        className: "arrow-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "video-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "\u8FD4\u4F63\u4ECB\u7ECD"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/images/power-icon-arrow.png",
        className: "arrow-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "banner-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "banner-text-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "13"), "\u5E74+"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "banner-text-bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "\u6570\u636E\u4E0E\u6280\u672F\u79EF\u7D2F")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "banner-text-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "15"), "\u4EBF+"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "banner-text-bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "\u6D77\u91CF\u7528\u6237\u6570\u636E")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "banner-text-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "3"), "\u4E07+"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "banner-text-bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "\u7528\u6237\u6807\u7B7E")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "banner-text-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "3000"), "+"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "banner-text-bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "\u7528\u6237\u5206\u7C7B"))));
    }
  }]);

  return IndexHeader;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(IndexHeader, "defaultProps", {
  active: 1
});



/***/ }),

/***/ "./components/layout/header/loginBtn.js":
/*!**********************************************!*\
  !*** ./components/layout/header/loginBtn.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginBtn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/xiaohuangyu/work/egg-ams/fanyongdou/components/layout/header/loginBtn.js";


function LoginBtn() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-nav-operation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/account/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "buy-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "\u7528\u6237\u767B\u5F55")));
}

/***/ }),

/***/ "./components/layout/header/menus.js":
/*!*******************************************!*\
  !*** ./components/layout/header/menus.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  path: '/',
  name: '首页',
  index: 1
}, {
  path: '/platform',
  name: '返佣平台',
  index: 2
}, {
  path: '/platformNews',
  name: '平台资讯',
  index: 3
}, {
  path: '/reports',
  name: '研报',
  index: 5
}, {
  path: '/calendar',
  name: '财经日历',
  index: 6
}, {
  path: '/news',
  name: '要闻',
  index: 4
}, {
  path: '/quotes',
  name: '大宗行情',
  index: 7
}]);

/***/ }),

/***/ "./components/layout/header/primaryHeader.js":
/*!***************************************************!*\
  !*** ./components/layout/header/primaryHeader.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrimaryHeader; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _menus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menus */ "./components/layout/header/menus.js");
/* harmony import */ var _loginBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loginBtn */ "./components/layout/header/loginBtn.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/xiaohuangyu/work/egg-ams/fanyongdou/components/layout/header/primaryHeader.js";





var PrimaryHeader =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PrimaryHeader, _Component);

  function PrimaryHeader() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PrimaryHeader);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PrimaryHeader).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PrimaryHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          banner = _this$props.banner;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("header", {
        className: "in-header primary-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "header-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "/",
        className: "router-link-active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "header-logo-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "header-top-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "header-nav-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, _menus__WEBPACK_IMPORTED_MODULE_7__["default"].map(function (it, key) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          className: "header-nav-item",
          key: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          href: it.path,
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()({
            active: it.index === active
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, it.name));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        className: "header-item-line",
        style: {
          opacity: '0',
          width: '51px',
          left: '216px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "header-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_loginBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "primary-header-const",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "sub-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "\u884C\u60C5\u4E2D\u5FC3"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "sub-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "\u57FA\u4E8E\u5927\u6570\u636E\u53CAAI\u4F18\u52BF\uFF0C\u7ED3\u5408\u7528\u6237\u4EA4\u6613\u5468\u671F\uFF0C\u83B7\u53D6\u5168\u7403\u5E02\u573A\u884C\u60C5\u6570\u636E\u5B9E\u65F6\u8D70\u5411\u3002 \u7ED9\u4E88\u5E73\u53F0\u7528\u6237\u4E2A\u6027\u5316\u3001\u7CBE\u51C6\u5408\u7406\u7684\u884C\u60C5\u7BA1\u7406\u65B9\u6848.")));
    }
  }]);

  return PrimaryHeader;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(PrimaryHeader, "defaultProps", {
  active: 1
});



/***/ }),

/***/ "./components/layout/index.js":
/*!************************************!*\
  !*** ./components/layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _header_defaultHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/defaultHeader */ "./components/layout/header/defaultHeader.js");
/* harmony import */ var _header_primaryHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/primaryHeader */ "./components/layout/header/primaryHeader.js");
/* harmony import */ var _header_indexHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/indexHeader */ "./components/layout/header/indexHeader.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer */ "./components/layout/footer.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index.scss */ "./components/layout/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/Users/xiaohuangyu/work/egg-ams/fanyongdou/components/layout/index.js";








var Layout =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Layout, _Component);

  function Layout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Layout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Layout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, title, "-\u8FD4\u4F63\u8C46"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/style/default.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/style/style.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })), this.renderHeader, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, children), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }));
    }
  }, {
    key: "renderHeader",
    get: function get() {
      var _this$props2 = this.props,
          index = _this$props2.index,
          header = _this$props2.header;
      if (index) return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_header_indexHeader__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }));
      if (header === 'default') return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_header_defaultHeader__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }));
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_header_primaryHeader__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Layout, "defaultProps", {
  title: '返佣豆',
  index: false,
  //是否是首页
  header: 'default',
  //使用的头部
  active: 1 //默认激活菜单 (首页)

});



/***/ }),

/***/ "./components/layout/index.scss":
/*!**************************************!*\
  !*** ./components/layout/index.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout/index.js");
var _jsxFileName = "/Users/xiaohuangyu/work/egg-ams/fanyongdou/pages/index.js";


function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "\u9996\u9875",
    index: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-container js-quickedit-main-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "home-shortcut-menu clearfix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-4 col-md-2 text-center home-shortcut-menu-item svg-animation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://ebank.4001961200.com/pweb/loginfromdoor.do?TranType=InterbankTrsPre",
    target: "_blank",
    className: "link-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    href: "#",
    className: "home-shortcut-menu-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 64,
    height: 64,
    viewBox: "0 0 64 64",
    id: "svgTransfer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: 64,
    height: 64,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "#2057AC",
    strokeWidth: 2,
    d: "M32,58 C46.3594035,58 58,46.3594035 58,32 C58,17.6405965 46.3594035,6 32,6 C17.6405965,6 6,17.6405965 6,32 C6,46.3594035 17.6405965,58 32,58 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "#FA2814",
    strokeWidth: 2,
    d: "M20.8386241,24.5135856 L22.865393,25.6201548 L21.9731048,21.1846473 C19.0250373,25.6201548 18,29.1296087 18,32 C18,39.7319865 24.2680135,46 32,46 C34.2244237,46 36.3276799,45.4812205 38.1953793,44.5580511 M43.3638461,39.7409451 L41.1898276,38.4488854 L41.9788214,42.8252733 C44.6596071,38.8206722 46,35.2122477 46,32 C46,24.2680135 39.7319865,18 32,18 C29.8147505,18 27.7464384,18.5006679 25.9035152,19.3935521",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "#2057AC",
    strokeWidth: 2,
    d: "M32,37 C34.7614237,37 37,34.7614237 37,32 C37,29.2385763 34.7614237,27 32,27 C29.2385763,27 27,29.2385763 27,32 C27,34.7614237 29.2385763,37 32,37 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "#2057AC",
    strokeOpacity: ".2",
    strokeWidth: 5,
    d: "M32,34.5 C33.3807119,34.5 34.5,33.3807119 34.5,32 C34.5,30.6192881 33.3807119,29.5 32,29.5 C30.6192881,29.5 29.5,30.6192881 29.5,32 C29.5,33.3807119 30.6192881,34.5 32,34.5 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })))), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "home-shortcut-menu-shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "home-shortcut-menu-title text-center animated fadeInUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "\u8F6C\u8D26\u6C47\u6B3E"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "home-shortcut-menu-subtitle animated fadeInUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "\u5230\u8D26\u5FEB\uFF0C5\u6298\u624B\u7EED\u8D39"))), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-4 col-md-2 text-center home-shortcut-menu-item svg-animation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://ebank.4001961200.com/pweb/loginfromdoor.do?TranType=ProfolioProductPre",
    target: "_blank",
    className: "link-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    href: "#",
    className: "home-shortcut-menu-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 64,
    height: 64,
    viewBox: "0 0 64 64",
    id: "svgMerchant",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "icon-merchant-feature-copy-a",
    d: "M22,56 C25.8659932,56 29,52.8659932 29,49 C29,45.1340068 25.8659932,42 22,42 C18.1340068,42 15,45.1340068 15,49 C15,52.8659932 18.1340068,56 22,56 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "icon-merchant-feature-copy-b",
    d: "M46,56 C49.8659932,56 53,52.8659932 53,49 C53,45.1340068 49.8659932,42 46,42 C42.1340068,42 39,45.1340068 39,49 C39,52.8659932 42.1340068,56 46,56 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: 64,
    height: 64,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "#2057AC",
    strokeWidth: 2,
    d: "M0,8 L12,8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    stroke: "#2057AC",
    strokeWidth: 2,
    points: "13 41 13 46 46 46",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "#2057AC",
    strokeWidth: 2,
    d: "M7.2198039,13 L12.7862555,40.8322581 L53.1388699,33.1460458 L56.8017873,13 L7.2198039,13 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#D2DDEE",
    xlinkHref: "#icon-merchant-feature-copy-a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "#2057AC",
    strokeWidth: 2,
    d: "M22,55 C25.3137085,55 28,52.3137085 28,49 C28,45.6862915 25.3137085,43 22,43 C18.6862915,43 16,45.6862915 16,49 C16,52.3137085 18.6862915,55 22,55 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#FFF",
    stroke: "#2057AC",
    strokeWidth: 2,
    d: "M22,51 C23.1045695,51 24,50.1045695 24,49 C24,47.8954305 23.1045695,47 22,47 C20.8954305,47 20,47.8954305 20,49 C20,50.1045695 20.8954305,51 22,51 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#D2DDEE",
    xlinkHref: "#icon-merchant-feature-copy-b",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "#2057AC",
    strokeWidth: 2,
    d: "M46,55 C49.3137085,55 52,52.3137085 52,49 C52,45.6862915 49.3137085,43 46,43 C42.6862915,43 40,45.6862915 40,49 C40,52.3137085 42.6862915,55 46,55 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#FFF",
    stroke: "#2057AC",
    strokeWidth: 2,
    d: "M46,51 C47.1045695,51 48,50.1045695 48,49 C48,47.8954305 47.1045695,47 46,47 C44.8954305,47 44,47.8954305 44,49 C44,50.1045695 44.8954305,51 46,51 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "#FA2814",
    strokeWidth: 2,
    d: "M20 19L20 30M28 19L28 30M36 19L36 30M44 19L44 30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  })))), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "home-shortcut-menu-shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "home-shortcut-menu-title text-center animated fadeInUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "\u8D2D\u4E70\u7406\u8D22"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "home-shortcut-menu-subtitle animated fadeInUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "\u9AD8\u6536\u76CA"))), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-4 col-md-2 text-center home-shortcut-menu-item svg-animation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://ebank.4001961200.com/pweb/loginfromdoor.do?TranType=NetFinancialLoad",
    target: "_blank",
    className: "link-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    href: "#",
    className: "home-shortcut-menu-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 64,
    height: 64,
    viewBox: "0 0 64 64",
    id: "svgItaojin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: 64,
    height: 64,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#2057AC",
    fillOpacity: ".2",
    d: "M8.71389309,32 C10.4451626,36.8832934 13.5336723,41.8179435 17.8578644,46.1421356 C22.1820565,50.4663277 27.1167066,53.5548374 32,55.2861069 C36.8832934,53.5548374 41.8179435,50.4663277 46.1421356,46.1421356 C50.4663277,41.8179435 53.5548374,36.8832934 55.2861069,32 C53.5548374,27.1167066 50.4663277,22.1820565 46.1421356,17.8578644 C41.8179435,13.5336723 36.8832934,10.4451626 32,8.71389309 C27.1167066,10.4451626 22.1820565,13.5336723 17.8578644,17.8578644 C13.5336723,22.1820565 10.4451626,27.1167066 8.71389309,32 Z M17.8578644,46.1421356 C6.53265992,34.8169312 3.68341751,19.3043892 11.4939033,11.4939033 C19.3043892,3.68341751 34.8169312,6.53265992 46.1421356,17.8578644 C57.4673401,29.1830688 60.3165825,44.6956108 52.5060967,52.5060967 C44.6956108,60.3165825 29.1830688,57.4673401 17.8578644,46.1421356 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "#2057AC",
    strokeWidth: 2,
    d: "M12.3170404,51.6829596 C19.8140048,59.179924 34.7038565,56.4450533 45.5744549,45.5744549 C56.4450533,34.7038565 59.179924,19.8140048 51.6829596,12.3170404 C44.1859952,4.82007597 29.2961435,7.55494668 18.4255451,18.4255451 C7.55494668,29.2961435 4.82007597,44.1859952 12.3170404,51.6829596 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "#2057AC",
    strokeWidth: 2,
    d: "M18.4255451,45.5744549 C29.2961435,56.4450533 44.1859952,59.179924 51.6829596,51.6829596 C59.179924,44.1859952 56.4450533,29.2961435 45.5744549,18.4255451 C34.7038565,7.55494668 19.8140048,4.82007597 12.3170404,12.3170404 C4.82007597,19.8140048 7.55494668,34.7038565 18.4255451,45.5744549 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "#FA2814",
    strokeWidth: 2,
    d: "M32,42 C37.5228475,42 42,37.5228475 42,32 C42,26.4771525 37.5228475,22 32,22 C26.4771525,22 22,26.4771525 22,32 C22,37.5228475 26.4771525,42 32,42 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    stroke: "#FA2814",
    strokeWidth: 2,
    points: "28.993 28.993 34.993 28.993 34.993 34.993 28.993 34.993",
    transform: "rotate(45 31.993 31.993)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  })))), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "home-shortcut-menu-shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "home-shortcut-menu-title text-center animated fadeInUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "i\u6DD8\u91D1"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "home-shortcut-menu-subtitle animated fadeInUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "1\u5206\u8D77\u6295\uFF0C\u4E0D\u8BBE\u8D2D\u4E70\u4E0A\u9650"))), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-4 col-md-2 text-center home-shortcut-menu-item svg-animation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://ebank.4001961200.com/pweb/loginfromdoor.do?TranType=RCBNationWideTrsPre",
    target: "_blank",
    className: "link-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    href: "#",
    className: "home-shortcut-menu-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 64,
    height: 64,
    viewBox: "0 0 64 64",
    id: "svgNongxin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    id: "icon-nongxin-feature-copy-a",
    cx: 50,
    cy: 46,
    r: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  })), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: 64,
    height: 64,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "#2057AC",
    strokeWidth: 2,
    d: "M11,8 L11,56 L51.5857864,56 L53,54.5857864 L53,8 L11,8 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: 2,
    height: 12,
    x: 31,
    y: 22,
    fill: "#FA2814",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#D2DDEE",
    d: "M50,60 C44.4771525,56 40,52.5228475 40,46 C40,40.4771525 44.4771525,36 50,36 C55.5228475,36 60,40.4771525 60,46 C60,52.5228475 55.5228475,56 50,60 Z M50,49 C51.6568542,49 53,47.6568542 53,46 C53,44.3431458 51.6568542,43 50,43 C48.3431458,43 47,44.3431458 47,46 C47,47.6568542 48.3431458,49 50,49 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "#2057AC",
    strokeWidth: 2,
    d: "M50,58.7626977 C56.8128281,53.766809 59,50.9897483 59,46 C59,41.0294373 54.9705627,37 50,37 C45.0294373,37 41,41.0294373 41,46 C41,50.9897483 43.1871719,53.766809 50,58.7626977 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#FFF",
    xlinkHref: "#icon-nongxin-feature-copy-a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: 50,
    cy: 46,
    r: 3,
    stroke: "#2057AC",
    strokeWidth: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "#FA2814",
    strokeWidth: 2,
    d: "M32,22 L32,34",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    stroke: "#FA2814",
    strokeWidth: 2,
    points: "40 33 32 41 24.004 33",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  })))), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "home-shortcut-menu-shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "home-shortcut-menu-title text-center animated fadeInUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, "\u519C\u4FE1\u5FEB\u5B58"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "home-shortcut-menu-subtitle animated fadeInUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, "0\u624B\u7EED\u8D39\uFF0C\u8F7B\u677E\u8F6C\u8D26"))), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-4 col-md-2 text-center home-shortcut-menu-item svg-animation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://ebank.4001961200.com/pcc/prelogin.do?LoginType=E&_locale=zh_CN",
    target: "_blank",
    className: "link-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    href: "#",
    className: "home-shortcut-menu-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 64,
    height: 64,
    viewBox: "0 0 64 64",
    id: "svgCard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h64v64H0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#D2DDEE",
    d: "M5 18h54v10H5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "#2057AC",
    strokeWidth: 2,
    d: "M6 13h52v38H6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "#2057AC",
    strokeWidth: 2,
    d: "M6 19h52v8H6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "#FA2814",
    strokeWidth: 2,
    d: "M39.82 37l-1.6 8h11.96l1.6-8H39.82z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "11.5",
    cy: "44.5",
    r: "1.5",
    fill: "#2057AC",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "16.5",
    cy: "44.5",
    r: "1.5",
    fill: "#2057AC",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "21.5",
    cy: "44.5",
    r: "1.5",
    fill: "#2057AC",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  })))), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "home-shortcut-menu-shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "home-shortcut-menu-title text-center animated fadeInUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, "\u4FE1\u7528\u5361"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "home-shortcut-menu-subtitle animated fadeInUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }, "\u79EF\u5206\u8BA1\u5212\uFF0C\u4F18\u60E0\u4E0D\u505C"))), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-4 col-md-2 text-center home-shortcut-menu-item svg-animation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://ebank.4001961200.com/pweb/loginfromdoor.do?TranType=NetLoanPre",
    target: "_blank",
    className: "link-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    href: "#",
    className: "home-shortcut-menu-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 64,
    height: 64,
    viewBox: "0 0 64 64",
    id: "svgLoan",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    id: "icon-loan-feature-copy-a",
    points: "9 8 17 8 17 52 13 58 9 52",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  })), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: 64,
    height: 64,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "#2057AC",
    strokeWidth: 2,
    d: "M22,9 L22,55 L56,55 L56,16.4807211 L46.6460989,9 L22,9 Z",
    style: {
      strokeDasharray: "155.143, 155.143",
      strokeDashoffset: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "#FA2814",
    strokeWidth: 2,
    d: "M45,49 C47.7614237,49 50,46.7614237 50,44 C50,41.2385763 47.7614237,39 45,39 C42.2385763,39 40,41.2385763 40,44 C40,46.7614237 42.2385763,49 45,49 Z",
    style: {
      strokeDasharray: "31.4204, 31.4204",
      strokeDashoffset: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    stroke: "#2057AC",
    strokeWidth: 2,
    points: "9 13 7 13 7 26",
    style: {
      strokeDasharray: "15, 15",
      strokeDashoffset: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "#2057AC",
    strokeWidth: 2,
    d: "M29 21L43 21M29 25L47 25",
    style: {
      strokeDasharray: "32, 32",
      strokeDashoffset: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#D2DDEE",
    xlinkHref: "#icon-loan-feature-copy-a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "#2057AC",
    strokeWidth: 2,
    d: "M10,9 L10,51.6972244 L13,56.1972244 L16,51.6972244 L16,9 L10,9 Z",
    style: {
      strokeDasharray: "102.211, 102.211",
      strokeDashoffset: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: this
  }))))), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "home-shortcut-menu-shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "home-shortcut-menu-title text-center animated fadeInUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418
    },
    __self: this
  }, "\u5C0F\u65F6\u8D37"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "home-shortcut-menu-subtitle animated fadeInUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: this
  }, "\u7EBF\u4E0A\u7533\u8BF7\uFF0C1\u5C0F\u65F6\u653E\u6B3E"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "main-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "region region-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-element-container form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "view view-frontpage view-id-frontpage view-display-id-page_1 js-view-dom-id-c96c88534de5cd0d95cadb063ddff85e5aee926ec237240858a55d7e059b718e",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "view-content ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "frontpage-recommned",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "recommend-item col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "bg-board clip-image-container image-scale panel-shadow hover-pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field--type-image absolute-fill-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/sites/default/files/2019-03/%E4%BC%98%E6%83%A0.jpg",
    width: 2000,
    height: 1125,
    typeof: "foaf:Image",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "front-board",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "top-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    width: 24,
    height: 24,
    alt: "Activity",
    title: "Activity",
    src: "/sites/default/files/2018-02/activity.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457
    },
    __self: this
  }, "\u4F18\u60E0\u6D3B\u52A8 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "more pull-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/taxonomy/term/12",
    hrefLang: "zh-hans",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459
    },
    __self: this
  }, "\u66F4\u591A"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bottom-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468
    },
    __self: this
  }, " \u4F18\u60E0\u6D3B\u52A8\u96C6\u9526\uFF01\u8FD9\u5F20\u4FE1\u7528\u5361\u4F60\u503C\u5F97\u62E5\u6709\uFF01 "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/node/6791",
    className: "absolute-fill-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "recommend-item col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "bg-board clip-image-container image-scale panel-shadow hover-pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field--type-image absolute-fill-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/sites/default/files/2019-03/%E8%A1%8C%E5%86%85%E9%A3%8E%E9%87%87_0.jpg",
    width: 600,
    height: 337,
    typeof: "foaf:Image",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "front-board",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "top-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    width: 24,
    height: 24,
    alt: "Phylogeny",
    title: "Phylogeny",
    src: "/sites/default/files/2018-02/phylogeny.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499
    },
    __self: this
  }, "\u884C\u5185\u98CE\u91C7 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "more pull-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/bank-inter-style",
    hrefLang: "zh-hans",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501
    },
    __self: this
  }, "\u66F4\u591A"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bottom-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510
    },
    __self: this
  }, " ", "\u6211\u884C\u201C\u793E\u533A\u91D1\u878D\u5927\u8BB2\u5802\u201D\u6210\u529F\u4E3E\u529E\u2014\u2014\u4EE5\u7CA4\u6E2F\u6FB3\u5927\u6E7E\u533A\u5EFA\u8BBE\u4E3A\u5951\u673A \u8C0B\u6C42\u6DF1\u5733\u793E\u533A\u957F\u8FDC\u53D1\u5C55!", " "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/node/6873",
    className: "absolute-fill-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "recommend-item col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "bg-board clip-image-container image-scale panel-shadow hover-pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field--type-image absolute-fill-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/sites/default/files/2018-01/%E6%85%88%E5%96%84%E5%9F%BA%E9%87%91.jpg",
    width: 600,
    height: 449,
    typeof: "foaf:Image",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "front-board",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "top-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    width: 24,
    height: 24,
    alt: "Architecture",
    title: "Architecture",
    src: "/sites/default/files/2018-02/architecture.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544
    },
    __self: this
  }, "\u6148\u5584\u57FA\u91D1 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "more pull-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/taxonomy/term/214",
    hrefLang: "zh-hans",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546
    },
    __self: this
  }, "\u66F4\u591A"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bottom-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555
    },
    __self: this
  }, " \u6DF1\u5733\u5E02\u6148\u5584\u4F1A\xB7\u6DF1\u5733\u519C\u6751\u5546\u4E1A\u94F6\u884C\u6148\u5584\u57FA\u91D1 "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/charity-fund",
    className: "absolute-fill-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558
    },
    __self: this
  }))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "block-gerenshouyetuijianchanpin",
    className: "block block-home-products-tab block-home-products-tab-block clearfix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "home-middle-tabs clearfix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav nav-tabs common-tabs common-tabs-slider  home-products-tabs",
    role: "tablist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    role: "presentation",
    className: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#home-finance-products",
    "aria-controls": "home",
    role: "tab",
    "data-toggle": "tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-purse-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587
    },
    __self: this
  }), "\u7406\u8D22")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#home-fund-products",
    "aria-controls": "home",
    role: "tab",
    "data-toggle": "tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-fund-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598
    },
    __self: this
  }), "\u57FA\u91D1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    role: "presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#home-security-products",
    "aria-controls": "home",
    role: "tab",
    "data-toggle": "tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-security-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609
    },
    __self: this
  }), "\u4FDD\u9669")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    role: "presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#home-loan-products",
    "aria-controls": "home",
    role: "tab",
    "data-toggle": "tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-loan-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620
    },
    __self: this
  }), "\u8D37\u6B3E")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "common-tabs-slider-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-full-pale-grey home-products-tab-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-cards-container",
    id: "home-finance-products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "top-finance-products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "home-cards row clearfix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-xs-12 col-sm-6 col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-item text-left financing-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finacing-card-label home-finacing-card-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-recommend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638
    },
    __self: this
  }), " \u70ED\u95E8\u63A8\u8350"), " "), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finacing-card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642
    },
    __self: this
  }, "\u8D22\u5BCC\u4E13\u4EAB\u7CFB\u5217\u7406\u8D22\u4EA7\u54C17\uFF08\u516D\u6708\u76C8\uFF09"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finacing-card-id",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645
    },
    __self: this
  }, "CZX270007"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finacing-card-rate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finacing-card-number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647
    },
    __self: this
  }, "4.20%"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finacing-card-rate-help",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650
    },
    __self: this
  }, "\u9884\u671F\u5E74\u5316\u6536\u76CA/\u51C0\u503C")), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finacing-card-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656
    },
    __self: this
  }, "183"), "\u5929"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659
    },
    __self: this
  }, "1"), "\u4E07\u5143\u8D77")), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/finances/person/CZX270007",
    className: "finacing-card-more link-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662
    },
    __self: this
  }, "\u67E5\u770B\u8BE6\u60C5", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/themes/szrcb/images/icons/icon-more-link-bule.svg",
    className: "icon-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 667
    },
    __self: this
  })), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/finances/person/CZX270007",
    className: "common-card-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-xs-12 col-sm-6 col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-item text-left financing-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finacing-card-label home-finacing-card-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-recommend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682
    },
    __self: this
  }), " \u70ED\u95E8\u63A8\u8350"), " "), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finacing-card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686
    },
    __self: this
  }, "\u5B63\u7A33\u76C8\u7B2C\u4E09\u671F\u7406\u8D22\u4EA7\u54C17"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finacing-card-id",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689
    },
    __self: this
  }, "JWY120517"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finacing-card-rate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finacing-card-number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 691
    },
    __self: this
  }, "\u4E0A\u671F4.00%"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finacing-card-rate-help",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694
    },
    __self: this
  }, "\u9884\u671F\u5E74\u5316\u6536\u76CA/\u51C0\u503C")), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finacing-card-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 698
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 700
    },
    __self: this
  }, "92"), "\u5929"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 702
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 703
    },
    __self: this
  }, "1"), "\u4E07\u5143\u8D77")), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/finances/person/JWY120517",
    className: "finacing-card-more link-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706
    },
    __self: this
  }, "\u67E5\u770B\u8BE6\u60C5", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/themes/szrcb/images/icons/icon-more-link-bule.svg",
    className: "icon-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 711
    },
    __self: this
  })), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/finances/person/JWY120517",
    className: "common-card-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 716
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-xs-12 col-sm-6 col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-item text-left financing-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finacing-card-label home-finacing-card-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-recommend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726
    },
    __self: this
  }), " \u70ED\u95E8\u63A8\u8350"), " "), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finacing-card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 730
    },
    __self: this
  }, "\u8D27\u5E01\u5929\u6DFB\u76C8\u7B2C\u4E00\u671F\u7406\u8D22\u4EA7\u54C1"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finacing-card-id",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733
    },
    __self: this
  }, "TTY120001"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finacing-card-rate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finacing-card-number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735
    },
    __self: this
  }, "3.50%"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finacing-card-rate-help",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 738
    },
    __self: this
  }, "\u9884\u671F\u5E74\u5316\u6536\u76CA/\u51C0\u503C")), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finacing-card-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 743
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 744
    },
    __self: this
  }, "1"), "\u5929"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747
    },
    __self: this
  }, "1"), "\u4E07\u5143\u8D77")), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://ebank.4001961200.com/pweb/loginfromdoor.do?TranType=ProfolioProductPre",
    className: "finacing-card-more link-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 750
    },
    __self: this
  }, "\u7ACB\u5373\u62A2\u8D2D", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/themes/szrcb/images/icons/icon-more-link-bule.svg",
    className: "icon-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 755
    },
    __self: this
  })), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/finances/person/TTY120001",
    className: "common-card-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 760
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-xs-12 col-sm-6 col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 766
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-item text-left financing-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finacing-card-label home-finacing-card-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 768
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 769
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-recommend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 770
    },
    __self: this
  }), " \u70ED\u95E8\u63A8\u8350"), " "), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finacing-card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 774
    },
    __self: this
  }, "\u8D22\u5BCC\u4E13\u4EAB\u7CFB\u5217\u7406\u8D22\u4EA7\u54C18\uFF08\u516D\u6708\u76C8\uFF09"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finacing-card-id",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777
    },
    __self: this
  }, "CZX270008"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finacing-card-rate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 778
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finacing-card-number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779
    },
    __self: this
  }, "4.25%"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "finacing-card-rate-help",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 782
    },
    __self: this
  }, "\u9884\u671F\u5E74\u5316\u6536\u76CA/\u51C0\u503C")), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "finacing-card-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 786
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 787
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 788
    },
    __self: this
  }, "183"), "\u5929"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 790
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 791
    },
    __self: this
  }, "100"), "\u4E07\u5143\u8D77")), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/finances/person/CZX270008",
    className: "finacing-card-more link-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 794
    },
    __self: this
  }, "\u67E5\u770B\u8BE6\u60C5", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/themes/szrcb/images/icons/icon-more-link-bule.svg",
    className: "icon-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 799
    },
    __self: this
  })), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/finances/person/CZX270008",
    className: "common-card-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 804
    },
    __self: this
  })))), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "home-section-link-more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 811
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/finance-products-list/P",
    className: "link-blue link-hover-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 812
    },
    __self: this
  }, "\u67E5\u770B\u5168\u90E8\u7406\u8D22\u4EA7\u54C1", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 817
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 818
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#2057AC",
    d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 824
    },
    __self: this
  }))))), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: "finance-product-type",
    defaultValue: "\u4E2A\u4EBA",
    hidden: "hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 832
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "home-fund-products",
    className: "home-cards-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 840
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "home-cards row clearfix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 845
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-xs-12 col-sm-6 col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 846
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/funds/003474",
    className: "card-item text-left clip-image-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 847
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fund-card-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 851
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 852
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-recommend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 853
    },
    __self: this
  }), "\u70ED\u95E8\u63A8\u8350"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fund-card-symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 856
    },
    __self: this
  }, "003474")), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fund-card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 858
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fund-card-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 859
    },
    __self: this
  }, "\u5357\u65B9\u5929\u5929\u5229B")), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fund-card-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 861
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fund-card-rate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 862
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fund-card-number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 863
    },
    __self: this
  }, "2.94%"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fund-card-rate-help",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 864
    },
    __self: this
  }, "\u4E03\u65E5\u5E74\u5316\u56DE\u62A5\u7387")), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fund-card-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 866
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 867
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 868
    },
    __self: this
  }, "1.000"), "\u51C0\u503C"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fund-card-risk",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 870
    },
    __self: this
  }, "\u6682\u65E0"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 870
    },
    __self: this
  }))), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fund-card-stars",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 873
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star-five-extinct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 875
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star-five-extinct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 876
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star-five-extinct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 877
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star-five-extinct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 878
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star-five-extinct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 879
    },
    __self: this
  }), " "), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fund-card-more link-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 881
    },
    __self: this
  }, "\u67E5\u770B\u8BE6\u60C5", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-svg icon icon-more-link-bule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 883
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-xs-12 col-sm-6 col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 887
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/funds/000917",
    className: "card-item text-left clip-image-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 888
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fund-card-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 892
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 893
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-recommend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 894
    },
    __self: this
  }), "\u70ED\u95E8\u63A8\u8350"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fund-card-symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 897
    },
    __self: this
  }, "000917")), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fund-card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 899
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fund-card-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 900
    },
    __self: this
  }, "\u5609\u5B9E\u673A\u6784\u5FEB\u7EBF\u8D27\u5E01A")), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fund-card-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 902
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fund-card-rate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 903
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fund-card-number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 904
    },
    __self: this
  }, "2.78%"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fund-card-rate-help",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 905
    },
    __self: this
  }, "\u4E03\u65E5\u5E74\u5316\u56DE\u62A5\u7387")), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fund-card-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 907
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 908
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 909
    },
    __self: this
  }, "1.000"), "\u51C0\u503C"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fund-card-risk",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 911
    },
    __self: this
  }, "\u6682\u65E0"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 911
    },
    __self: this
  }))), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fund-card-stars",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 914
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star-five-extinct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 916
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star-five-extinct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 917
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star-five-extinct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 918
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star-five-extinct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 919
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star-five-extinct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 920
    },
    __self: this
  }), " "), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fund-card-more link-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 922
    },
    __self: this
  }, "\u67E5\u770B\u8BE6\u60C5", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-svg icon icon-more-link-bule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 924
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-xs-12 col-sm-6 col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 928
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/funds/202303",
    className: "card-item text-left clip-image-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 929
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fund-card-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 933
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 934
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-recommend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 935
    },
    __self: this
  }), "\u70ED\u95E8\u63A8\u8350"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fund-card-symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 938
    },
    __self: this
  }, "202303")), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fund-card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 940
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fund-card-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 941
    },
    __self: this
  }, "\u5357\u65B9\u7406\u8D2214\u5929A")), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fund-card-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 943
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fund-card-rate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 944
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fund-card-number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 945
    },
    __self: this
  }, "3.48%"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fund-card-rate-help",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 946
    },
    __self: this
  }, "\u8FD1\u4E00\u5E74\u56DE\u62A5\u7387")), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fund-card-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 948
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 949
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 950
    },
    __self: this
  }, "1.000"), "\u51C0\u503C"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fund-card-risk",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 952
    },
    __self: this
  }, "\u6682\u65E0"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 952
    },
    __self: this
  }))), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fund-card-stars",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 955
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star-five-alight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 956
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star-five-alight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 957
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star-five-alight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 958
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star-five-extinct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 959
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star-five-extinct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 960
    },
    __self: this
  }), " "), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fund-card-more link-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 962
    },
    __self: this
  }, "\u67E5\u770B\u8BE6\u60C5", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-svg icon icon-more-link-bule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 964
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-xs-12 col-sm-6 col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 968
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/funds/001878",
    className: "card-item text-left clip-image-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 969
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fund-card-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 973
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 974
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-recommend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 975
    },
    __self: this
  }), "\u70ED\u95E8\u63A8\u8350"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fund-card-symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 978
    },
    __self: this
  }, "001878")), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fund-card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 980
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fund-card-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 981
    },
    __self: this
  }, "\u5609\u5B9E\u6CAA\u6E2F\u6DF1\u7CBE\u9009\u80A1\u7968")), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fund-card-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 983
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fund-card-rate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 984
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fund-card-number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 985
    },
    __self: this
  }, "-2.16%"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fund-card-rate-help",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 986
    },
    __self: this
  }, "\u8FD1\u4E00\u5E74\u56DE\u62A5\u7387")), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fund-card-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 988
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 989
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 990
    },
    __self: this
  }, "1.504"), "\u51C0\u503C"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "fund-card-risk",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 992
    },
    __self: this
  }, "\u6682\u65E0"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 992
    },
    __self: this
  }))), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fund-card-stars",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 995
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star-five-extinct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 997
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star-five-extinct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 998
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star-five-extinct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 999
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star-five-extinct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1000
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "star-five-extinct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1001
    },
    __self: this
  }), " "), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fund-card-more link-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1003
    },
    __self: this
  }, "\u67E5\u770B\u8BE6\u60C5", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-svg icon icon-more-link-bule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1005
    },
    __self: this
  }))))), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "home-section-link-more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1010
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/fund-products-list",
    className: "link-blue link-hover-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1011
    },
    __self: this
  }, "\u67E5\u770B\u5168\u90E8\u57FA\u91D1\u4EA7\u54C1", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1016
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1017
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#2057AC",
    d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1023
    },
    __self: this
  })))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "views-element-container block block-views block-views-blockhome-products-list-block-2 clearfix",
    id: "block-views-block-home-products-list-block-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1034
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1038
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "view view-home-products-list view-id-home_products_list view-display-id-block_2 js-view-dom-id-72069027088b9a136757d559cf9678c69e59e8134f3da1b73005606723b90557",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1039
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "view-content ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1040
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-cards-container home-security",
    id: "home-security-products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1041
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "home-cards row clearfix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1045
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-xs-12 col-sm-6 col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1046
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-item text-left clip-image-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1047
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/node/376",
    className: "cover-card-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1048
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-field-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1052
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1053
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/sites/default/files/2018-12/%E7%83%AD%E9%97%A8%E6%8E%A8%E8%8D%901.jpg",
    width: 1920,
    height: 1080,
    typeof: "foaf:Image",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1055
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1064
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1065
    },
    __self: this
  }, "\u4E2D\u610F\u5E74\u5E74\u4F18\u60A6\u4E24\u5168\u4FDD\u9669")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1069
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1070
    },
    __self: this
  }, "\u4FDD\u9669\u516C\u53F8\uFF1A\u4E2D\u610F\u4EBA\u5BFF\u4FDD\u9669\u6709\u9650\u516C\u53F8 \u4EA7\u54C1\u7B80\u4ECB \u4E2D\u610F\u5E74\u5E74\u4F18\u60A6\u4E24\u5168\u4FDD\u9669\u662F\u4E2D\u610F\u4EBA\u5BFF\u63A8\u51FA\u7684\u8D22\u5BCC\u7A33\u5065\u589E\u503C\u8BA1\u5212\uFF0C\u65E2\u4FDD\u8BC1\u5BA2\u6237\u8D44\u91D1\u5B89\u5168\u7A33\u5065\u589E\u503C\uFF0C\u53C8\u517C\u987E\u591A\u91CD\u9AD8\u989D\u610F\u5916\u4FDD\u969C\u7684\u4FDD\u9669\u7406\u8D22\u8BA1\u5212\uFF0C\u53EF\u6EE1\u8DB3\u5BB6\u5EAD\u89C4\u5212\u4E0D\u540C\u9636\u6BB5\u7684\u9700\u6C42\u2026")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/node/376",
    className: "security-card-more link-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1075
    },
    __self: this
  }, "\u67E5\u770B\u8BE6\u60C5", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-svg icon-more-link-bule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1079
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-xs-12 col-sm-6 col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1083
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-item text-left clip-image-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1084
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/node/447",
    className: "cover-card-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1085
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-field-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1089
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1090
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/sites/default/files/2018-12/%E7%83%AD%E9%97%A8%E6%8E%A8%E8%8D%902%20%284%29.jpg",
    width: 1920,
    height: 1080,
    typeof: "foaf:Image",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1092
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1102
    },
    __self: this
  }, "\u4E2D\u610F\u60A6\u4EAB\u5B89\u5EB7\u91CD\u5927\u75BE\u75C5\u4FDD\u9669")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1107
    },
    __self: this
  }, "\u4FDD\u9669\u516C\u53F8\uFF1A\u4E2D\u610F\u4EBA\u5BFF\u4FDD\u9669\u6709\u9650\u516C\u53F8 \u4EA7\u54C1\u7B80\u4ECB \u4E2D\u610F\u60A6\u4EAB\u5B89\u5EB7\u91CD\u5927\u75BE\u75C5\u4FDD\u9669\u662F\u4E00\u6B3E\u7EC8\u8EAB\u91CD\u5927\u75BE\u75C5\u4FDD\u9669\u4EA7\u54C1\uFF0C\u591A\u79CD\u7F34\u8D39\u65B9\u5F0F\u53EF\u7075\u6D3B\u9009\u62E9\uFF0C50\u79CD\u91CD\u75BE+10\u79CD\u8F7B\u75C7\u75BE\u75C5\uFF0C\u91CD\u75BE\u8F7B\u75C7\u53EF\u4E8C\u6B21\u8D54\u4ED8\u4E14\u4E0D\u5206\u7EC4\u7C7B\uFF0C\u53CC\u91CD\u8C41\u514D\u4EBA\u6027\u5173\u7231\uFF0C\u2026")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/node/447",
    className: "security-card-more link-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1112
    },
    __self: this
  }, "\u67E5\u770B\u8BE6\u60C5", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-svg icon-more-link-bule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1116
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-xs-12 col-sm-6 col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-item text-left clip-image-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/node/395",
    className: "cover-card-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1122
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-field-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1127
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/sites/default/files/2018-12/%E7%83%AD%E9%97%A8%E6%8E%A8%E8%8D%903.jpg",
    width: 1920,
    height: 1080,
    typeof: "foaf:Image",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1129
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1139
    },
    __self: this
  }, "\u4FE1\u6CF0\u4FDD\u9669\u5343\u4E07\u4F20\u627F\u7EC8\u8EAB\u5BFF\u9669B\u6B3E")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1144
    },
    __self: this
  }, "\u4FDD\u9669\u516C\u53F8\uFF1A\u4FE1\u6CF0\u4EBA\u5BFF\u4FDD\u9669\u80A1\u4EFD\u6709\u9650\u516C\u53F8 \xA0 \u9002\u7528\u4EBA\u7FA4\uFF1A \u4E3A\u81EA\u5DF1\u548C\u5BB6\u4EBA\u505A\u957F\u671F\u8D22\u52A1\u89C4\u5212\u7684\u5BA2\u6237\uFF1B \u9700\u8981\u5B9E\u73B0\u8D44\u4EA7\u4FDD\u5168\u3001\u4F20\u627F\u529F\u80FD\u7684\u5BA2\u6237\uFF1B \u9700\u8981\u4E3A\u5B50\u5973\u51C6\u5907\u6559\u80B2\u91D1\u7684\u5BA2\u6237\uFF1B \u4E3A\u81EA\u5DF1\u51C6\u5907\u517B\u8001\u91D1\u7684\u5BA2\u6237\u2026")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/node/395",
    className: "security-card-more link-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1150
    },
    __self: this
  }, "\u67E5\u770B\u8BE6\u60C5", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-svg icon-more-link-bule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1154
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "home-section-link-more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1159
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/taxonomy/term/237",
    className: "link-blue link-hover-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1160
    },
    __self: this
  }, "\u67E5\u770B\u5168\u90E8\u4FDD\u9669\u4EA7\u54C1", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#2057AC",
    d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1172
    },
    __self: this
  })))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "views-element-container block block-views block-views-blockhome-products-list-block-1 clearfix",
    id: "block-views-block-home-products-list-block-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1185
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1189
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "view view-home-products-list view-id-home_products_list view-display-id-block_1 js-view-dom-id-b469e18372b20e8019b000a832b9acd25ec1eb56ce1d0697579bf5f2db4ed3d2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1190
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "view-content ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1191
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-cards-container home-loan",
    id: "home-loan-products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1192
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "home-cards row clearfix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1196
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-xs-12 col-sm-6 col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1197
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-item text-left clip-image-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1198
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/node/356",
    className: "cover-card-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1199
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1203
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1204
    },
    __self: this
  }, "\u4E2A\u4EBA\u7EFC\u5408\u6388\u4FE1\u989D\u5EA6")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1208
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1209
    },
    __self: this
  }, "\u4E2A\u4EBA\u7EFC\u5408\u6388\u4FE1\u989D\u5EA6\u662F\u6307\u501F\u6B3E\u5408\u540C\u4E00\u6B21\u7B7E\u8BA2\uFF0C\u5728\u5408\u540C\u89C4\u5B9A\u7684\u6709\u6548\u671F\u5185\uFF0C\u5141\u8BB8\u501F\u6B3E\u4EBA\u968F\u65F6\u63D0\u53D6\u3001\u968F\u65F6\u5F52\u8FD8\u3001\u65E0\u9650\u6B21\u5FAA\u73AF\u4F7F\u7528\u989D\u5EA6\u7684\u8D37\u6B3E\u4E1A\u52A1\u3002 \xA0 \u670D\u52A1\u7279\u8272 \u4E00\u3001\u6388\u4FE1\u989D\u5EA6\u9AD8 \u6700\u9AD8\u53EF\u8FBE\u4EBA\u6C11\u5E012000\u4E07\u5143\u3002 \u4E8C\u3001")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-field-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1214
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1215
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/sites/default/files/2018-01/%E5%85%AC%E7%A7%AF%E8%B4%B7%E9%A6%96%E5%9B%BE283x160px.jpg",
    width: 283,
    height: 160,
    typeof: "foaf:Image",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1217
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/node/356",
    className: "loan-card-more link-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1226
    },
    __self: this
  }, "\u67E5\u770B\u8BE6\u60C5", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-svg icon-more-link-bule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1230
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-xs-12 col-sm-6 col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1234
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-item text-left clip-image-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1235
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/node/286",
    className: "cover-card-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1236
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1240
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1241
    },
    __self: this
  }, "\u5546\u4E1A\u7528\u623F\u6309\u63ED\u8D37\u6B3E")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1245
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1246
    },
    __self: this
  }, "\u4E2A\u4EBA\u5546\u4E1A\u7528\u623F\u6309\u63ED\u8D37\u6B3E\u662F\u6307\u81EA\u7136\u4EBA\u7533\u8BF7\u7684\u4EE5\u8D2D\u7F6E\u5546\u4E1A\u7528\u623F\uFF08\u5982\u5546\u94FA\uFF0C\u5199\u5B57\u697C\uFF09\u4E3A\u76EE\u7684\uFF0C\u5E76\u4EE5\u6240\u8D2D\u623F\u4EA7\u4F5C\u62B5\u62BC\uFF0C\u91C7\u7528\u5206\u671F\u4ED8\u6B3E\u65B9\u5F0F\u5F52\u8FD8\u7684\u8D37\u6B3E\u3002 \xA0 \u670D\u52A1\u7279\u8272 \u4E00\u3001\u6210\u6570\u9AD8 \u82E5\u6240\u8D2D\u5546\u4E1A\u7528\u623F\u4E3A\u4E00\u624B\uFF0C")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-field-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1251
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1252
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/sites/default/files/2018-01/%E9%94%99%E8%83%BD%E6%94%B9_0.jpg",
    width: 400,
    height: 225,
    typeof: "foaf:Image",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1254
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/node/286",
    className: "loan-card-more link-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1263
    },
    __self: this
  }, "\u67E5\u770B\u8BE6\u60C5", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-svg icon-more-link-bule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1267
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-xs-12 col-sm-6 col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1271
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-item text-left clip-image-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1272
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/node/290",
    className: "cover-card-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1273
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1277
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1278
    },
    __self: this
  }, "\u4E2A\u4EBA\u6D88\u8D39\u8D37\u6B3E")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1280
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1281
    },
    __self: this
  }, "\u4E2A\u4EBA\u6D88\u8D39\u8D37\u6B3E\u662F\u6307\u81EA\u7136\u4EBA\u7533\u8BF7\u7684\u7528\u4E8E\u4E2A\u4EBA\u6D88\u8D39\u7528\u9014\u7684\u8D37\u6B3E\u3002 \xA0 \u670D\u52A1\u7279\u8272 \u4E00\u3001\u7528\u9014\u5E7F\u6CDB \u8D2D\u8F66\u3001\u65C5\u6E38\u3001\u88C5\u4FEE\u3001\u6D88\u8D39\u3001\u5A5A\u5E86\u2026\u5404\u79CD\u7528\u9014\u4EFB\u60A8\u9009\u62E9\u3002 \u4E8C\u3001\u91D1\u989D\u9AD8 \u6700\u9AD8\u53EF\u8FBE\u4EBA\u6C11\u5E01500\u4E07\u5143\u3002 \u4E09")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-field-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1287
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1288
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/sites/default/files/2017-12/%E6%B6%88%E8%B4%B9%E8%B4%B7.jpg",
    width: 550,
    height: 411,
    typeof: "foaf:Image",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1290
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/node/290",
    className: "loan-card-more link-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1299
    },
    __self: this
  }, "\u67E5\u770B\u8BE6\u60C5", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-svg icon-more-link-bule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1303
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-xs-12 col-sm-6 col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1307
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-item text-left clip-image-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1308
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/node/429",
    className: "cover-card-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1309
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1313
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1314
    },
    __self: this
  }, "\u4E2A\u4EBA\u7ECF\u8425\u8D37\u6B3E")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1316
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1317
    },
    __self: this
  }, "\u4E2A\u4EBA\u7ECF\u8425\u8D37\u6B3E\u662F\u6307\u81EA\u7136\u4EBA\u7533\u8BF7\u7684\u7528\u4E8E\u89E3\u51B3\u7ECF\u8425\u8FC7\u7A0B\u4E2D\u8D44\u91D1\u5468\u8F6C\u9700\u6C42\u7684\u8D37\u6B3E\u3002 \xA0 \u670D\u52A1\u7279\u8272 \u4E00\u3001\u91D1\u989D\u9AD8 \u6700\u9AD8\u53EF\u8FBE\u4EBA\u6C11\u5E012000\u4E07\u5143\u3002 \u4E8C\u3001\u62C5\u4FDD\u7075\u6D3B \u652F\u6301\u591A\u79CD\u62C5\u4FDD\u65B9\u5F0F\uFF0C\u5305\u62EC\u62B5\u62BC\u3001\u8D28\u62BC\u3001\u4FDD\u8BC1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-field-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1323
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1324
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/sites/default/files/2018-01/4_0.jpg",
    width: 2500,
    height: 1406,
    typeof: "foaf:Image",
    className: "img-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1326
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/node/429",
    className: "loan-card-more link-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1335
    },
    __self: this
  }, "\u67E5\u770B\u8BE6\u60C5", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-svg icon-more-link-bule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1339
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "home-section-link-more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1344
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/loan-products",
    className: "link-blue link-hover-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1345
    },
    __self: this
  }, "\u67E5\u770B\u5168\u90E8\u8D37\u6B3E\u4EA7\u54C1", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1350
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1351
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#2057AC",
    d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1357
    },
    __self: this
  })))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-block-form",
    "data-drupal-selector": "search-block-form",
    id: "block-sousuobiaodan",
    role: "search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1370
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "/search/node",
    method: "get",
    id: "search-block-form",
    acceptCharset: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1376
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-type-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1382
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1383
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group-common",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1384
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    "data-drupal-selector": "edit-keys",
    className: "form-search",
    required: "required",
    autoComplete: "off",
    placeholder: "\u8F93\u5165\u5173\u952E\u5B57\u5BF9\u5168\u7AD9\u8FDB\u884C\u641C\u7D22",
    type: "search",
    id: "edit-keys",
    name: "keys",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1385
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "form-search-clear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1395
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-close-gray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1396
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-search-button",
    type: "submit",
    defaultValue: "\u641C\u7D22",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1398
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1407
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "home-section row clearfix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1409
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-full-pale-grey home-notifications-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1410
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-element-container block block-views block-views-blockhome-recommend-news-block-2 clearfix col-md-6 home-recommand-news",
    id: "block-views-block-home-recommend-news-block-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1411
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "block-title panel-title-with-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1415
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon panel-title-icon icon-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1416
    },
    __self: this
  }), "\u901A\u77E5\u516C\u544A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1419
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "view view-home-recommend-news view-id-home_recommend_news view-display-id-block_2 js-view-dom-id-8738a747154bd24e99215e5fb87efb4490331a250c509c93c60edfac6a29f55c",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1420
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "view-content ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1421
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1422
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1423
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1424
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-created",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1425
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1426
    },
    __self: this
  }, "2019-04-19")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1430
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1431
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/node/7230",
    hrefLang: "zh-hans",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1432
    },
    __self: this
  }, "\u6DF1\u5733\u519C\u6751\u5546\u4E1A\u94F6\u884C\u5355\u4F4D\u5927\u989D\u5B58\u5355 2019\u5E74\u7B2C8\u671F\u53D1\u884C\u516C\u544A")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1438
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-created",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1439
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1440
    },
    __self: this
  }, "2019-04-17")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1444
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1445
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/node/7213",
    hrefLang: "zh-hans",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1446
    },
    __self: this
  }, "\u5173\u4E8E\u90E8\u5206\u4E1A\u52A1\u7CFB\u7EDF\u5347\u7EA7\u7EF4\u62A4\u7684\u901A\u77E5")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1452
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-created",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1453
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1454
    },
    __self: this
  }, "2019-04-12")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1458
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1459
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/node/7111",
    hrefLang: "zh-hans",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1460
    },
    __self: this
  }, "\u6DF1\u5733\u519C\u6751\u5546\u4E1A\u94F6\u884C\u4E2A\u4EBA\u5927\u989D\u5B58\u5355 2019\u5E74\u7B2C3\u671F\u53D1\u884C\u516C\u544A")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1466
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-created",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1467
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1468
    },
    __self: this
  }, "2019-04-10")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1472
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1473
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/node/6999",
    hrefLang: "zh-hans",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1474
    },
    __self: this
  }, "\u5173\u4E8E\u90E8\u5206\u4E1A\u52A1\u7CFB\u7EDF\u5347\u7EA7\u7EF4\u62A4\u7684\u901A\u77E5")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1480
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-created",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1481
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1482
    },
    __self: this
  }, "2019-04-10")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "views-field views-field-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1486
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "field-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1487
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/node/6997",
    hrefLang: "zh-hans",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1488
    },
    __self: this
  }, "\"\u65B0\u6625\u5F00\u5361\uFF0C\u6D88\u8D39\u6709\u793C\"\u8425\u9500\u6D3B\u52A83\u6708\u4EFD\u83B7\u5956\u540D\u5355\u516C\u544A"))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "home-section-link-more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1499
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/notifications",
    className: "link-blue link-hover-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1500
    },
    __self: this
  }, "\u67E5\u770B\u5168\u90E8\u901A\u77E5\u516C\u544A", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon-svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1505
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1506
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#2057AC",
    d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1512
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-full-pale-grey home-notifications-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1521
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1522
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "panel-title-with-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1523
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon panel-title-icon icon-calculator-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1524
    },
    __self: this
  }), "\u91D1\u878D\u5C0F\u52A9\u624B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-financial-assistant common-financial-assistant",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1527
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1528
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-4 text-center financial-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1529
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "icon-circle",
    href: "/finance-calculator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1530
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-calculator-tools",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1531
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1533
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/finance-calculator",
    className: "link link-black text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1534
    },
    __self: this
  }, "\u7406\u8D22\u8BA1\u7B97\u5668"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-4 text-center financial-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1542
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "icon-circle",
    href: "/loan-interest-rate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1543
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-loan-tools",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1544
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1546
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/loan-interest-rate",
    className: "link link-black text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1547
    },
    __self: this
  }, "\u8D37\u6B3E\u5229\u7387"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-4 text-center financial-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1555
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "icon-circle",
    href: "/deposit-interest-rate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1556
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-save-tools",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1560
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1562
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/deposit-interest-rate",
    className: "link link-black text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1563
    },
    __self: this
  }, "\u5B58\u6B3E\u5229\u7387"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-4 text-center financial-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1571
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "icon-circle",
    href: "/exchange-rate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1572
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-price-tools",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1573
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1575
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/exchange-rate",
    className: "link link-black text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1576
    },
    __self: this
  }, "\u5916\u6C47\u724C\u4EF7"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-4 text-center financial-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1584
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "icon-circle",
    href: "/finance-products-list/P",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1585
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-finance-tools",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1589
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1591
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/finance-products-list/P",
    className: "link link-black text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1592
    },
    __self: this
  }, "\u7406\u8D22\u4EA7\u54C1"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-4 text-center financial-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1600
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "icon-circle",
    href: "/fund-products-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1601
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-fund-tools",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1602
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1604
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/fund-products-list",
    className: "link link-black text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1605
    },
    __self: this
  }, "\u57FA\u91D1\u51C0\u503C"))))))))))));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/xiaohuangyu/work/egg-ams/fanyongdou/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map