import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import { createStoreWithMiddleware } from '../store';

import Confirmation, { UnconnectedConfirmation } from './Confirmation';

/**
 * Factory function to create a ShallowWrapper for the Landing component.
 * @param {*} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = createStoreWithMiddleware(initialState);
  const wrapper = shallow(<Confirmation store={store} resetDelay={1000} />)
    .dive()
    .dive();
  // console.log(wrapper.debug());
  return wrapper;
};

describe('<Confirmation />', () => {
  test('Contains the message', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'message');
    expect(component.length).toBe(1);
  });

  test('Message contains customer name', () => {
    const initialState = { customer: { name: 'Stephanie' } };
    const wrapper = setup(initialState);
    const component = findByTestAttr(wrapper, 'message');
    expect(component.text()).toContain(initialState.customer.name);
  });

  test('Calls `resetMenu`, `clearCustomer`, and `resetPizza` action creators after a delay', () => {
    const resetMenuMock = jest.fn();
    const clearCustomerMock = jest.fn();
    const resetPizzaMock = jest.fn();

    const props = {
      name: 'Sample',
      resetMenu: resetMenuMock,
      clearCustomer: clearCustomerMock,
      resetPizza: resetPizzaMock,
      resetDelay: 2000,
    };

    // set up app component with nextStepMock as the nextStep prop
    // shallow does not call useEffect; use mount
    const wrapper = mount(<UnconnectedConfirmation {...props} />);

    // create a promise that checks for expected mock calls after 2 seconds
    const promise = new Promise((resolutionFunc, rejectionFunc) => {
      setTimeout(() => {
        resolutionFunc();
      }, 2100);
    }).then(() => {
      expect(resetMenuMock.mock.calls.length).toBe(1);
      expect(resetPizzaMock.mock.calls.length).toBe(1);
      expect(clearCustomerMock.mock.calls.length).toBe(1);
    });

    // return the promise for the test to be called
    return promise;
  });
});
