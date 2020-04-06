import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import { createStoreWithMiddleware } from '../store';

import Customer, { UnconnectedCustomer } from './Customer';

/**
 * Factory function to create a ShallowWrapper for the Customer component.
 * @param {*} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = createStoreWithMiddleware(initialState);
  const wrapper = shallow(<Customer store={store} />)
    .dive()
    .dive();
  // console.log(wrapper.debug());
  return wrapper;
};

describe('<Customer />', () => {
  test('Contains the customer name input', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'input-customer-name');
    expect(component.length).toBe(1);
  });

  test('Contains the customer email input', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'input-customer-email');
    expect(component.length).toBe(1);
  });

  test('Contains the customer street input', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'input-customer-street');
    expect(component.length).toBe(1);
  });

  test('Contains the customer city input', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'input-customer-city');
    expect(component.length).toBe(1);
  });

  test('Contains the customer state input', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'input-customer-state');
    expect(component.length).toBe(1);
  });

  test('Contains the customer phone input', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'input-customer-phone');
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

  describe('Upon filling form and clicking next', () => {
    // create sample customer
    const sampleCustomer = {
      name: 'Meagan',
      email: 'meagan@sample.com',
      street: '4560 Lavender St',
      city: 'Salt Lake',
      state: 'Utah',
      phone: '503388333',
    };

    // declare wrapper
    let store;
    let wrapper;
    let currentStep;

    // declare all inputs
    let nameInput;
    let emailInput;
    let streetInput;
    let cityInput;
    let stateInput;
    let phoneInput;

    beforeAll(() => {
      // create wrapper
      store = createStoreWithMiddleware();
      wrapper = mount(<Customer store={store} />);
      currentStep = store.getState().menu.step;

      // get all inputs
      nameInput = findByTestAttr(wrapper, 'input-customer-name').last();
      emailInput = findByTestAttr(wrapper, 'input-customer-email').last();
      streetInput = findByTestAttr(wrapper, 'input-customer-street').last();
      cityInput = findByTestAttr(wrapper, 'input-customer-city').last();
      stateInput = findByTestAttr(wrapper, 'input-customer-state').last();
      phoneInput = findByTestAttr(wrapper, 'input-customer-phone').last();

      // simulate form insertions
      nameInput.simulate('change', {
        target: { name: nameInput.prop('name'), value: sampleCustomer.name },
      });
      emailInput.simulate('change', {
        target: { name: emailInput.prop('name'), value: sampleCustomer.email },
      });
      streetInput.simulate('change', {
        target: {
          name: streetInput.prop('name'),
          value: sampleCustomer.street,
        },
      });
      cityInput.simulate('change', {
        target: { name: cityInput.prop('name'), value: sampleCustomer.city },
      });
      stateInput.simulate('change', {
        target: { name: stateInput.prop('name'), value: sampleCustomer.state },
      });
      phoneInput.simulate('change', {
        target: { name: phoneInput.prop('name'), value: sampleCustomer.phone },
      });

      // click the next button to update the customer state
      const buttonNext = findByTestAttr(wrapper, 'button-next').last();
      buttonNext.simulate('submit', { preventDefault: () => {} });
    });

    test('Inserted customer values update the customer state accordingly', () => {
      expect(store.getState().customer).toEqual(sampleCustomer);
    });

    test('Advanced to next step', () => {
      expect(store.getState().menu.step).toBe(currentStep + 1);
    });
  });
});
