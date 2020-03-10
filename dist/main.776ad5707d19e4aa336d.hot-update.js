webpackHotUpdate("main",{

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

var mapStateToProps = function mapStateToProps(state) {
  return {
    pizzas: state.pizzaRecipes,
    router: state.router
  };
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

/***/ })

})
//# sourceMappingURL=main.776ad5707d19e4aa336d.hot-update.js.map