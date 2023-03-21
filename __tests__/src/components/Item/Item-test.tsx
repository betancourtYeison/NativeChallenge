import React from 'react';

import { render, screen } from '@testing-library/react-native';

import { Item } from '../../../../src/components';

test('renders Header with logo and title', () => {
  const props = {
    description: 'Banco Paga Todo es Para Todos',
    age: 10,
    url: 'https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-pagatodo.jpeg?alt=media&token=38b6ac4d-85ac-4288-bada-88eb5a0dec20',
    bankName: 'Paga Todo',
  };
  render(<Item {...props} />);
  const title = screen.getByText('10 - Paga Todo');
  expect(title).toBeOnTheScreen();
  const subtitle = screen.getByText('Banco Paga Todo es Para Todos');
  expect(subtitle).toBeOnTheScreen();
  const logo = screen.getByTestId('logo');
  expect(logo).toBeOnTheScreen();
});
