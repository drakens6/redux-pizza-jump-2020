webpackHotUpdate("main",{

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
  pizzas: [],
  selectedPizza: null,
  router: null
};
var pizzaSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createSlice"])({
  name: 'pizzaRecipes',
  initialState: [],
  reducers: {
    addPizzaRecipes: function addPizzaRecipes(state, action) {
      var pizzaRecipes = action.payload.pizzaRecipes;
      state.pizzas.push(pizzaRecipes);
    },
    updateIngredientState: function updateIngredientState(state, action) {
      var _a = action.payload,
          pizzaKey = _a.pizzaKey,
          toppingKey = _a.toppingKey;
      var isAdded = state.pizzas[pizzaKey].Toppings[toppingKey].isAdded;
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

/***/ })

})
//# sourceMappingURL=main.69ed4329caa87c10355e.hot-update.js.map