webpackHotUpdate("main",{

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

var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};


var initialState = {
  customerInfo: null,
  pizzas: [],
  selectedPizza: {
    id: "",
    Name: "",
    Price: 0,
    Toppings: []
  },
  cart: [],
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

    case "@@router/LOCATION_CHANGE":
      {
        var path = action.payload.location.pathname;
        var id = parseInt(path.split('/')[2]);

        if (path === "/cart") {
          var total = 7;
          var toppings = state.selectedPizza.Toppings.filter(function (topping) {
            return topping.isAdded === true;
          });

          for (var i = 0; i < toppings.length; i++) {
            total += toppings[i].price;
          }

          var result = __assign(__assign({}, state), {
            cart: __spreadArrays(state.cart, [__assign(__assign({}, state.selectedPizza), {
              Toppings: __spreadArrays(state.selectedPizza.Toppings),
              Total: total
            })])
          });

          return result;
        }

        if (isNaN(id)) {
          return __assign({}, state);
        }

        return __assign(__assign({}, state), {
          selectedPizza: state.pizzas[id]
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
        var selection = state.selectedPizza;
        var isAdded = !selection.Toppings[action.toppingKey].isAdded;

        var topping = __assign(__assign({}, selection.Toppings[action.toppingKey]), {
          isAdded: isAdded
        });

        selection.Toppings.splice(action.toppingKey, 1, topping);

        var result = __assign(__assign({}, state), {
          selectedPizza: __assign(__assign({}, selection), selection.Toppings)
        });

        return result;
      }

    case _types_action_types__WEBPACK_IMPORTED_MODULE_0__["ADD_PIZZA_TO_CART"]:
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
//# sourceMappingURL=main.8059ca12545ca253d191.hot-update.js.map