import * as actionTypes from './types';
import axios from '../axios-orders';

export const purchasePizzaSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_PIZZA_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchasePizzaFail = error => {
  return {
    type: actionTypes.PURCHASE_PIZZA_FAIL,
    error: error
  };
};

export const purchasePizzaStart = () => {
  return {
    type: actionTypes.PURCHASE_PIZZA_START
  };
};

export const purchasePizza = orderData => {
  return dispatch => {
    dispatch(purchasePizzaStart());
    axios
      .post('/orders.json', orderData)
      .then(response => {
        dispatch(purchasePizzaSuccess(response.data.name, orderData));
      })
      .catch(error => {
        console.log('Error occured');
        console.log(error);
        dispatch(purchasePizzaFail(error));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  };
};

export const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrders = () => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    axios
      .get('/orders.json')
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch(err => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
