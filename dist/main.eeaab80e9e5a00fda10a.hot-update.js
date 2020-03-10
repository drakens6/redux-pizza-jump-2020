webpackHotUpdate("main",{

/***/ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js":
false,

/***/ "./node_modules/immer/dist/immer.module.js":
false,

/***/ "./node_modules/invariant/browser.js":
false,

/***/ "./node_modules/json-stringify-safe/stringify.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/redux-immutable-state-invariant/dist/index.js":
false,

/***/ "./node_modules/redux-immutable-state-invariant/dist/isImmutable.js":
false,

/***/ "./node_modules/redux-immutable-state-invariant/dist/trackForMutations.js":
false,

/***/ "./node_modules/redux-thunk/es/index.js":
false,

/***/ "./node_modules/reselect/es/index.js":
false,

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
    }, "Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, this.props.pizzas[id].Name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
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
    }, this.props.pizzas[id].Toppings.map(function (topping, index) {
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

/***/ "./src/store/actions/pizza.actions.tsx":
/*!*********************************************!*\
  !*** ./src/store/actions/pizza.actions.tsx ***!
  \*********************************************/
/*! exports provided: mapStateToProps, mapDispatchToProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony import */ var _types_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/action.types */ "./src/store/types/action.types.tsx");
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


var mapStateToProps = function mapStateToProps(state) {
  return __assign(__assign({}, state.pizzaRecipesReducer), {
    router: state.router
  });
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addTopping: function addTopping(toppingKey, pizzaKey) {
      return dispatch({
        type: _types_action_types__WEBPACK_IMPORTED_MODULE_0__["ADD_TOPPING"],
        toppingKey: toppingKey,
        pizzaKey: pizzaKey
      });
    },
    createOrder: function createOrder(order) {
      return dispatch({
        type: _types_action_types__WEBPACK_IMPORTED_MODULE_0__["CREATE_ORDER"],
        order: order
      });
    },
    fetchPizzaRecipes: function fetchPizzaRecipes() {
      return dispatch({
        type: _types_action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PIZZA_RECIPES"]
      });
    }
  };
};

/***/ }),

/***/ "./src/store/effects/pizza.effects.tsx":
/*!*********************************************!*\
  !*** ./src/store/effects/pizza.effects.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sagaInitializer; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _shared_network_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/network.util */ "./src/shared/network.util.ts");
/* harmony import */ var _types_action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/action.types */ "./src/store/types/action.types.tsx");
var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};





function fetchPizzaRecipes() {
  var pizzaRecipes, error_1;
  return __generator(this, function (_a) {
    switch (_a.label) {
      case 0:
        _a.trys.push([0, 3,, 5]);

        return [4, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_shared_network_util__WEBPACK_IMPORTED_MODULE_1__["NetworkUtility"].fetchPizzaRecipes)];

      case 1:
        pizzaRecipes = _a.sent();
        return [4, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          type: _types_action_types__WEBPACK_IMPORTED_MODULE_2__["SET_PIZZA_RECIPES"],
          pizzas: pizzaRecipes
        })];

      case 2:
        _a.sent();

        return [3, 5];

      case 3:
        error_1 = _a.sent();
        return [4, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          type: _types_action_types__WEBPACK_IMPORTED_MODULE_2__["SET_PIZZA_RECIPES_ERROR"],
          message: error_1
        })];

      case 4:
        _a.sent();

        return [3, 5];

      case 5:
        return [2];
    }
  });
}

function sagaInitializer() {
  return __generator(this, function (_a) {
    switch (_a.label) {
      case 0:
        return [4, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_types_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_PIZZA_RECIPES"], fetchPizzaRecipes)])];

      case 1:
        _a.sent();

        return [2];
    }
  });
}

/***/ }),

/***/ "./src/store/index.tsx":
/*!*****************************!*\
  !*** ./src/store/index.tsx ***!
  \*****************************/
/*! exports provided: reducerMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducerMap", function() { return reducerMap; });
/* harmony import */ var _reducer_pizza_maker_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer/pizza-maker.reducer */ "./src/store/reducer/pizza-maker.reducer.tsx");

var reducerMap = {
  pizzaReducer: _reducer_pizza_maker_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/store/reducer/pizza-maker.reducer.tsx":
/*!***************************************************!*\
  !*** ./src/store/reducer/pizza-maker.reducer.tsx ***!
  \***************************************************/
/*! exports provided: initialState, pizzaMakerReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pizzaMakerReducer", function() { return pizzaMakerReducer; });
/* harmony import */ var _types_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/action.types */ "./src/store/types/action.types.tsx");
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


var initialState = {
  customerInfo: null,
  pizzas: [],
  selectedPizza: null,
  router: null
};
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
          selectedPizza: state.pizzas[action.key]
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

/***/ }),

/***/ "./src/store/store.config.tsx":
/*!************************************!*\
  !*** ./src/store/store.config.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureAppStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/store/index.tsx");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _effects_pizza_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./effects/pizza.effects */ "./src/store/effects/pizza.effects.tsx");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
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







function configureAppStore(history, initialState) {
  var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(__assign(__assign({}, _index__WEBPACK_IMPORTED_MODULE_2__["reducerMap"]), {
    router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["connectRouter"])(history)
  }));
  var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_5__["default"])();
  var middleware = [sagaMiddleware, Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["routerMiddleware"])(history)];
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(rootReducer, initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middleware))));
  sagaMiddleware.run(_effects_pizza_effects__WEBPACK_IMPORTED_MODULE_4__["default"]);
  return store;
}

/***/ })

})
//# sourceMappingURL=main.eeaab80e9e5a00fda10a.hot-update.js.map