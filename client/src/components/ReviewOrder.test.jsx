import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import { createStoreWithMiddleware } from '../store';

import ReviewOrder, { UnconnectedReviewOrder } from './ReviewOrder';

/**
 * Factory function to create a ShallowWrapper for the ReviewOrder component.
 * @param {*} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = createStoreWithMiddleware(initialState);
  const wrapper = shallow(<ReviewOrder store={store} />)
    .dive()
    .dive();
  // console.log(wrapper.debug());
  return wrapper;
};

describe('<ReviewOrder />', () => {
  test('Shows selected sauce level', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'label-sauce-level');
    expect(component.length).toBe(1);
  });

  test('Shows selected crust size', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'label-crust-size');
    expect(component.length).toBe(1);
  });

  test('Shows selected toppings', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'label-toppings');
    expect(component.length).toBe(1);
  });

  test('Shows customer name, email, street, city, state, and phone', () => {
    const wrapper = setup();
    let component = findByTestAttr(wrapper, 'label-customer-name');
    expect(component.length).toBe(1);
    component = findByTestAttr(wrapper, 'label-customer-email');
    expect(component.length).toBe(1);
    component = findByTestAttr(wrapper, 'label-customer-street');
    expect(component.length).toBe(1);
    component = findByTestAttr(wrapper, 'label-customer-city');
    expect(component.length).toBe(1);
    component = findByTestAttr(wrapper, 'label-customer-state');
    expect(component.length).toBe(1);
    component = findByTestAttr(wrapper, 'label-customer-phone');
    expect(component.length).toBe(1);
  });

  test('Contains the back button', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'button-back');
    expect(component.length).toBe(1);
  });

  test('Contains the next button', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'button-next');
    expect(component.length).toBe(1);
  });

  // @todo Add action creator tests
  // @todo Verify fields display expected information
});
