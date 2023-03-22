import React from 'react';

import { screen, cleanup, waitFor } from '@testing-library/react-native';
import axios from 'axios';

import { Body } from '../../../../src/components';
import { renderWithProviders } from '../../../../src/utils';

jest.mock('axios');

afterEach(cleanup);

test('renders Banks List', async () => {
  const mockData = {
    data: [
      {
        description: 'Banco Paga Todo es Para Todos',
        age: 10,
        url: 'https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-pagatodo.jpeg?alt=media&token=38b6ac4d-85ac-4288-bada-88eb5a0dec20',
        bankName: 'Paga Todo',
      },
    ],
  };
  (axios.get as jest.Mock).mockResolvedValue(mockData);
  renderWithProviders(<Body />);
  await waitFor(() => expect(screen.getByText('10 - Paga Todo')).toBeOnTheScreen());
});
