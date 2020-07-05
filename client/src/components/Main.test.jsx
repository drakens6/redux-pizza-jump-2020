import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import { createStoreWithMiddleware } from '../store';

import Main from './Main';

import Landing from './Landing';
import SauceCrust from './SauceCrust';
import Toppings from './Toppings';
import Customer from './Customer';
import ReviewOrder from './ReviewOrder';
import Confirmation from './Confirmation';

/**
 * Factory function to create a ShallowWrapper for the Main component.
 * @param {*} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = createStoreWithMiddleware(initialState);
  const wrapper = shallow(<Main store={store} />)
    .dive()
    .dive();
  // console.log(wrapper.debug());
  return wrapper;
};

describe('<Main />', () => {
  test('`Landing` is displayed initially (step 0)', () => {
    const initialState = {}; //{ menu: { step: 0 } };
    const wrapper = setup(initialState);
    const component = wrapper.find(Landing);
    expect(component.length).toBe(1);
  });

  test('`SauceCrust` is displayed on step 1', () => {
    const initialState = { menu: { step: 1 } };
    const wrapper = setup(initialState);
    const component = wrapper.find(SauceCrust);
    expect(component.length).toBe(1);
  });

  test('`Toppings` is displayed on step 2', () => {
    const initialState = { menu: { step: 2 } };
    const wrapper = setup(initialState);
    const component = wrapper.find(Toppings);
    expect(component.length).toBe(1);
  });

  test('`Customer` is displayed on step 3', () => {
    const initialState = { menu: { step: 3 } };
    const wrapper = setup(initialState);
    const component = wrapper.find(Customer);
    expect(component.length).toBe(1);
  });

  test('`ReviewOrder` is displayed on step 4', () => {
    const initialState = { menu: { step: 4 } };
    const wrapper = setup(initialState);
    const component = wrapper.find(ReviewOrder);
    expect(component.length).toBe(1);
  });

  test('`Confirmation` is displayed last (step 5)', () => {
    const initialState = { menu: { step: 5 } };
    const wrapper = setup(initialState);
    const component = wrapper.find(Confirmation);
    expect(component.length).toBe(1);
  });
});
