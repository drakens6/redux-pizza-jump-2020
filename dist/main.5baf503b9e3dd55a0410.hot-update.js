webpackHotUpdate("main",{

/***/ "./src/components/PriceCalculator/PriceCalculator.tsx":
/*!************************************************************!*\
  !*** ./src/components/PriceCalculator/PriceCalculator.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _PriceCalculator_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PriceCalculator.scss */ "./src/components/PriceCalculator/PriceCalculator.scss");
/* harmony import */ var _PriceCalculator_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PriceCalculator_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_pizza_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/pizza.actions */ "./src/store/actions/pizza.actions.tsx");
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






var PriceCalculator = function (_super) {
  __extends(PriceCalculator, _super);

  function PriceCalculator() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.pizzaCost = 7;
    return _this;
  }

  PriceCalculator.prototype.calculateTotalFromToppings = function (toppings) {
    var total = 0;

    for (var i = 0; i < toppings.length; i++) {
      if (toppings[i].isAdded) {
        total += toppings[i].price;
      }
    }

    total += this.pizzaCost;
    return total;
  };

  PriceCalculator.prototype.render = function () {
    var total = this.calculateTotalFromToppings(this.props.target.Toppings);
    var toppings = this.props.target.Toppings.filter(function (topping) {
      return topping.isAdded === true;
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Calculator__Enclosure"
    }, toppings.map(function (topping, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Calculator__Enclosure-Value"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, topping.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "$" + topping.price.toFixed(2)));
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Calculator__Enclosure-PizzaCost"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Base Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "$" + this.pizzaCost.toFixed(2))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Calculator__Enclosure-Total"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Total:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "$", total.toFixed(2))));
  };

  PriceCalculator = __decorate([Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(_store_actions_pizza_actions__WEBPACK_IMPORTED_MODULE_3__["mapStateToProps"], _store_actions_pizza_actions__WEBPACK_IMPORTED_MODULE_3__["mapDispatchToProps"])], PriceCalculator);
  return PriceCalculator;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PriceCalculator);

/***/ })

})
//# sourceMappingURL=main.5baf503b9e3dd55a0410.hot-update.js.map