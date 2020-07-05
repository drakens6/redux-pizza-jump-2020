import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import App from './App';
import Main from './components/Main';

describe('<App />', () => {
  test('Renders the Main component', () => {
    const wrapper = shallow(<App />);
    const component = wrapper.find(Main);
    expect(component.length).toBe(1);
    // const { getByText } = render(<App />);
    // const linkElement = getByText(/Welcome to Anton's Pizza Shop/);
    // expect(linkElement).toBeInTheDocument();
  });
});
