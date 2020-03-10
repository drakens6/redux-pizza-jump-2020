webpackHotUpdate("main",{

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
/* harmony import */ var _store_reducer_pizza_maker_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/reducer/pizza-maker.reducer */ "./src/store/reducer/pizza-maker.reducer.tsx");
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
    Object(_store_reducer_pizza_maker_reducer__WEBPACK_IMPORTED_MODULE_7__["updateIngredientState"])({
      toppingKey: toppingKey,
      pizzaKey: pizzaKey
    });
  };

  EditPizza.prototype.getToppings = function (id) {
    console.log(id);
    if (typeof id !== 'number') return;
    var toppings = this.props.pizzaRecipes.pizzas[id].Toppings;
    if (!toppings.length) return;
    var result = toppings.filter(function (topping) {
      return topping.isAdded === true;
    });
    return result;
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
    }, "Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, this.props.pizzaRecipes.pizzas[id].Name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      color: "primary",
      tag: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"],
      to: "/menu"
    }, "Save")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "EditPizza__Enclosure-Body"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Body__Pizza"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pizza_Pizza__WEBPACK_IMPORTED_MODULE_2__["default"], {
      toppings: this.getToppings(id)
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Body__Toppings"
    }, this.props.pizzaRecipes.pizzas[id].Toppings.map(function (topping, index) {
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
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: topping.isAdded ? "Body__Toppings-Visible" : ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "Body__Toppings-Selected"
      }, "\u2714")));
    }))));
  };

  EditPizza = __decorate([Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(_store_actions_pizza_actions__WEBPACK_IMPORTED_MODULE_6__["mapStateToProps"], _store_actions_pizza_actions__WEBPACK_IMPORTED_MODULE_6__["mapDispatchToProps"])], EditPizza);
  return EditPizza;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (EditPizza);

/***/ }),

/***/ "./src/components/Home/Home.tsx":
/*!**************************************!*\
  !*** ./src/components/Home/Home.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Home_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home.scss */ "./src/components/Home/Home.scss");
/* harmony import */ var _Home_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Home_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions_pizza_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/pizza.actions */ "./src/store/actions/pizza.actions.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Pizza_Pizza__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Pizza/Pizza */ "./src/components/Pizza/Pizza.tsx");
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









var Home = function (_super) {
  __extends(Home, _super);

  function Home() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Home.prototype.getToppings = function (toppings) {
    return toppings.filter(function (topping) {
      return topping.isAdded === true;
    });
  };

  Home.prototype.handleSetSelectedPizza = function (index) {};

  Home.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Pizza__Enclosure"
    }, this.props.pizzaRecipes.pizzas.map(function (pizza, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: index,
        className: "Pizza__Enclosure-Item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Item__Image"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pizza_Pizza__WEBPACK_IMPORTED_MODULE_6__["default"], {
        toppings: _this.getToppings(pizza.Toppings)
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Item__Title"
      }, pizza.Name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Item__Action"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: function onClick() {
          return _this.handleSetSelectedPizza(index);
        },
        tag: react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"],
        to: "/edit/" + index,
        color: "info"
      }, "View pizza")));
    }));
  };

  Home.prototype.setPizzaView = function () {
    return this.props.pizzaRecipes.pizzas.map(function (pizza, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: index,
        className: "Pizza__Enclosure-Item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Item__Image"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Item__Title"
      }, pizza.Name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Item__Action"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        tag: react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"],
        to: "/edit/" + index,
        color: "info"
      }, "View pizza")));
    });
  };

  Home.prototype.setDefaultView = function () {
    return Array.from({
      length: 10
    }, function (_, value) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: value,
        className: "Pizza__Enclosure-Item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Item__Image"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Item__Title"
      }, "Pizza # ", value));
    });
  };

  Home = __decorate([Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(_store_actions_pizza_actions__WEBPACK_IMPORTED_MODULE_4__["mapStateToProps"], _store_actions_pizza_actions__WEBPACK_IMPORTED_MODULE_4__["mapDispatchToProps"])], Home);
  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/store/reducer/pizza-maker.reducer.tsx":
/*!***************************************************!*\
  !*** ./src/store/reducer/pizza-maker.reducer.tsx ***!
  \***************************************************/
/*! exports provided: initialState, updateIngredientState, addPizzaRecipes, default, pizzaMakerReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateIngredientState", function() { return updateIngredientState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPizzaRecipes", function() { return addPizzaRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pizzaMakerReducer", function() { return pizzaMakerReducer; });
/* harmony import */ var _types_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/action.types */ "./src/store/types/action.types.tsx");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var _a;



var initialState = {
  customerInfo: null,
  pizzaRecipes: {
    pizzas: []
  },
  selectedPizza: null,
  router: null
};
var pizzaSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createSlice"])({
  name: 'pizzaRecipes',
  initialState: initialState,
  reducers: {
    addPizzaRecipes: function addPizzaRecipes(state, action) {
      var pizzaRecipes = action.payload.pizzaRecipes;
      state.pizzaRecipes.pizzas.push(pizzaRecipes);
    },
    updateIngredientState: function updateIngredientState(state, action) {
      var _a = action.payload,
          pizzaKey = _a.pizzaKey,
          toppingKey = _a.toppingKey;
      var isAdded = state.pizzaRecipes.pizzas[pizzaKey].Toppings[toppingKey].isAdded;
      isAdded = !isAdded;
    }
  }
});
var updateIngredientState = (_a = pizzaSlice.actions, _a.updateIngredientState),
    addPizzaRecipes = _a.addPizzaRecipes;
/* harmony default export */ __webpack_exports__["default"] = (pizzaSlice.reducer);
function pizzaMakerReducer(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case _types_action_types__WEBPACK_IMPORTED_MODULE_0__["SET_PIZZA_RECIPES"]:
      {
        return __assign(__assign({}, state), {
          pizzas: action.pizzas
        });
      }

    case _types_action_types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_PIZZA"]:
      {
        return __assign(__assign({}, state), {
          selectedPizza: state.pizzaRecipes.pizzas[action.key]
        });
      }

    case _types_action_types__WEBPACK_IMPORTED_MODULE_0__["ADD_TOPPING"]:
      {
        return state;
      }

    default:
      {
        return state;
      }
  }
}

/***/ })

})
//# sourceMappingURL=main.2a7e9cf356edcdc6772c.hot-update.js.map