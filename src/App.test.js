import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('includes input', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<input />)).toEqual(true)
});

it('includes button', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<button />)).toEqual(true)
});
