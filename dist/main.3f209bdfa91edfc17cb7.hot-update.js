webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Cart/Cart.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Cart/Cart.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Cart__Container {\n  width: 100%; }\n  .Cart__Container-Header {\n    border-bottom: 1px solid black; }\n  .Cart__Container-Item {\n    list-style-type: none; }\n\n.Cart__Item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/components/Cart/Cart.tsx":
/*!**************************************!*\
  !*** ./src/components/Cart/Cart.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cart_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cart.scss */ "./src/components/Cart/Cart.scss");
/* harmony import */ var _Cart_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Cart_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions_pizza_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/pizza.actions */ "./src/store/actions/pizza.actions.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Cart = function (_super) {
  __extends(Cart, _super);

  function Cart() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Cart.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Cart"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Cart__Container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Cart__Container-Header"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Shopping Cart")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "Cart__Container-Item"
    }, this.props.cart.map(function (pizza) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "Cart__Item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Cart__Item-Key"
      }, pizza.Name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Cart__Item-Value"
      }, pizza.Total));
    }))));
  };

  Cart = __decorate([Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(_store_actions_pizza_actions__WEBPACK_IMPORTED_MODULE_2__["mapStateToProps"], _store_actions_pizza_actions__WEBPACK_IMPORTED_MODULE_2__["mapDispatchToProps"])], Cart);
  return Cart;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./src/components/EditPizza/EditPizza.tsx":
/*!************************************************!*\
  !*** ./src/components/EditPizza/EditPizza.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Pizza_Pizza__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Pizza/Pizza */ "./src/components/Pizza/Pizza.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _EditPizza_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditPizza.scss */ "./src/components/EditPizza/EditPizza.scss");
/* harmony import */ var _EditPizza_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_EditPizza_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_pizza_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/pizza.actions */ "./src/store/actions/pizza.actions.tsx");
/* harmony import */ var _PriceCalculator_PriceCalculator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../PriceCalculator/PriceCalculator */ "./src/components/PriceCalculator/PriceCalculator.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var EditPizza = function (_super) {
  __extends(EditPizza, _super);

  function EditPizza() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  EditPizza.prototype.handleAddToppingOnCLick = function (toppingKey, pizzaKey) {
    this.props.addTopping(toppingKey, pizzaKey);
  };

  EditPizza.prototype.getToppings = function (id) {
    console.log(id);
    if (typeof id !== 'number') return;
    var toppings = this.props.pizzas[id].Toppings;
    if (!toppings.length) return;
    var result = toppings.filter(function (topping) {
      return topping.isAdded === true;
    });
    return result;
  };

  EditPizza.prototype.getClassName = function (topping) {
    var className = topping.isAdded ? "Body__Toppings-Visible" : "Body__Toppings-Hidden";
    return className;
  };

  EditPizza.prototype.render = function () {
    var _this = this;

    var path = this.props.router.location.pathname;
    var id = parseInt(path.split('/')[2]);
    console.log(this.props);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "EditPizza__Enclosure"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "EditPizza__Enclosure-Header"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      color: "primary",
      tag: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
      to: "/menu"
    }, "Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, this.props.selectedPizza.Name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      color: "primary",
      tag: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
      to: "/cart"
    }, "Add to cart")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "EditPizza__Enclosure-Body"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Body__Pizza"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pizza_Pizza__WEBPACK_IMPORTED_MODULE_2__["default"], {
      toppings: this.getToppings(id)
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Body__Toppings"
    }, this.props.selectedPizza.Toppings.map(function (topping, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "Body__Toppings-Button",
        onClick: function onClick() {
          return _this.handleAddToppingOnCLick(index, id);
        },
        key: "topping-" + index
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "Body__Toppings-Content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, topping.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Topping__Icon Body__Toppings-Icon--" + topping.name.toLowerCase()
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _this.getClassName(topping)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "Body__Toppings-Selected"
      }, "\u2714")));
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "EditPizza__Enclosure-Calculator"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceCalculator_PriceCalculator__WEBPACK_IMPORTED_MODULE_7__["default"], {
      target: this.props.selectedPizza
    })));
  };

  EditPizza = __decorate([Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(_store_actions_pizza_actions__WEBPACK_IMPORTED_MODULE_6__["mapStateToProps"], _store_actions_pizza_actions__WEBPACK_IMPORTED_MODULE_6__["mapDispatchToProps"])], EditPizza);
  return EditPizza;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (EditPizza);

/***/ })

})
//# sourceMappingURL=main.3f209bdfa91edfc17cb7.hot-update.js.map