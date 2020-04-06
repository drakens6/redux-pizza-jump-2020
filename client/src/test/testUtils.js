import checkPropTypes from 'check-prop-types';

/**
 * Returns node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

/**
 * Tests that a component does not have any PropType warning
 * @param {*} component A component to test
 * @param {*} conformingProps Sample props for the component
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  console.log(propError);
  expect(propError).toBeUndefined();
};
