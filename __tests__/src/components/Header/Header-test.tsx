import React from 'react';

import { render, screen } from '@testing-library/react-native';

import { Header } from '../../../../src/components';

test('renders Header with logo and title', () => {
  render(<Header />);
  const logo = screen.getByTestId('logo');
  expect(logo).toBeOnTheScreen();
  const title = screen.getByText(/Bank List/i);
  expect(title).toBeOnTheScreen();
});
