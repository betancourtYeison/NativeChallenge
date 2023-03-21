/**
 * @format
 */

import 'react-native';
import React from 'react';
import '@testing-library/jest-native/extend-expect';

// Note: test renderer must be required after react-native.
import { renderWithProviders } from '../src/utils';
import App from '../App';

jest.useFakeTimers();

it('renders correctly', () => {
  const tree = renderWithProviders(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
