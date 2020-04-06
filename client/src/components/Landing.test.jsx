import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import { createStoreWithMiddleware } from '../store';

import Landing, { UnconnectedLanding } from './Landing';

/**
 * Factory function to create a ShallowWrapper for the Landing component.
 * @param {*} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = createStoreWithMiddleware(initialState);
  const wrapper = shallow(<Landing store={store} />)
    .dive()
    .dive();
  // console.log(wrapper.debug());
  return wrapper;
};

describe('<Landing />', () => {
  test('Contains the begin order button', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'order-button');
    expect(component.length).toBe(1);
  });

  test('Clicking the order button calls `nextStep` action creator', () => {
    const nextMenuMock = jest.fn();

    const props = {
      nextMenu: nextMenuMock,
    };

    // set up app component with nextStepMock as the nextStep prop
    const wrapper = shallow(<UnconnectedLanding {...props} />);

    // Click the order button
    const button = findByTestAttr(wrapper, 'order-button');
    button.simulate('click', { preventDefault: () => {} });

    // check to see if mock ran
    const nextMenuCallCount = nextMenuMock.mock.calls.length;

    expect(nextMenuCallCount).toBe(1);
  });
});
