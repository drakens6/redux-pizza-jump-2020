import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import { createStoreWithMiddleware } from '../store';

import SauceCrust, { UnconnectedSauceCrust } from './SauceCrust';

/**
 * Factory function to create a ShallowWrapper for the SauceCrust component.
 * @param {*} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = createStoreWithMiddleware(initialState);
  const wrapper = shallow(<SauceCrust store={store} />)
    .dive()
    .dive();
  // console.log(wrapper.debug());
  return wrapper;
};

describe('<SauceCrust />', () => {
  test('Renders the crust-size selector', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'select-crust-size');
    expect(component.length).toBe(1);
  });

  test('Renders the sauce-level selector', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'select-sauce-level');
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
