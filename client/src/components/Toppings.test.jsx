import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import { createStoreWithMiddleware } from '../store';

import Toppings, { UnconnectedToppings } from './Toppings';

/**
 * Factory function to create a ShallowWrapper for the Toppings component.
 * @param {*} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = createStoreWithMiddleware(initialState);
  const wrapper = shallow(<Toppings store={store} />)
    .dive()
    .dive();
  // console.log(wrapper.debug());
  return wrapper;
};

describe('<Toppings />', () => {
  test('Renders the toppings selector', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'multi-select-toppings');
    expect(component.length).toBe(1);
  });

  test('Renders the back button', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'button-back');
    expect(component.length).toBe(1);
  });

  test('Renders the next button', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'button-next');
    expect(component.length).toBe(1);
  });

  // @todo Add action creator tests
});
