webpackHotUpdate("main",{

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
/* harmony import */ var _effects_pizza_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effects/pizza.effects */ "./src/store/effects/pizza.effects.tsx");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _reducer_pizza_maker_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer/pizza-maker.reducer */ "./src/store/reducer/pizza-maker.reducer.tsx");
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







function configureAppStore(history, initialState) {
  var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    pizzaRecipesReducer: _reducer_pizza_maker_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
    router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["connectRouter"])(history)
  });
  var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_3__["default"])();

  var middleware = __spreadArrays(Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__["getDefaultMiddleware"])({
    thunk: false
  }), [sagaMiddleware, Object(connected_react_router__WEBPACK_IMPORTED_MODULE_1__["routerMiddleware"])(history)]);

  var options = {
    reducer: rootReducer,
    middleware: middleware,
    devTools: true,
    preloadedState: initialState
  };
  var store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__["configureStore"])(options);
  sagaMiddleware.run(_effects_pizza_effects__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return store;
}

/***/ })

})
//# sourceMappingURL=main.5b627d02d125d553e763.hot-update.js.map