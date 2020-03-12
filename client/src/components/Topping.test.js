import React from 'react';
import renderer from 'react-test-renderer';

import Topping from './Topping';

test('Testing Topping mouseEnter and mouseLeave', () => {
  const component = renderer.create(<Topping name={'Cheese'}></Topping>);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseEnter();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseLeave();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
