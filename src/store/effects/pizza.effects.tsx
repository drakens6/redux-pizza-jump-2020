import { call, put, takeEvery, all } from 'redux-saga/effects'
import { NetworkUtility } from '../../shared/network.util'

import * as types from '../types/action.types'

function* fetchPizzaRecipes() {
    try {

        const pizzaRecipes = yield call(NetworkUtility.fetchPizzaRecipes)

        yield put({ type: types.SET_PIZZA_RECIPES, pizzas: pizzaRecipes })

    } catch (error) {

        yield put({ type: types.SET_PIZZA_RECIPES_ERROR, message: error })

    }
}



export default function* sagaInitializer() {
    yield all([
        takeEvery(types.FETCH_PIZZA_RECIPES, fetchPizzaRecipes),
        
    ])
}