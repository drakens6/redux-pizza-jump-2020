import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";

import Button from '../button';

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div);
})

it("renders button correctly", () => {
    const { getByTestId } = render(<Button label="Create Pizza" ></Button>);
    expect(getByTestId('button')).toHaveTextContent("Create Pizza");
})

it("renders button correctly", () => {
    const { getByTestId } = render(<Button label="Add Toppings" ></Button>);
    expect(getByTestId('button')).toHaveTextContent("Add Toppings");
})

it("matches snapshot", () => {
    const tree = renderer.create(<Button label="save"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})