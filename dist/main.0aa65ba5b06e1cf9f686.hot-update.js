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


var initialState = {
  customerInfo: null,
  pizzas: [],
  selectedPizza: {
    id: "",
    Name: "",
    Price: 0,
    Toppings: []
  },
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

    default:
      {
        return state;
      }
  }
}

/***/ })

})
//# sourceMappingURL=main.0aa65ba5b06e1cf9f686.hot-update.js.map