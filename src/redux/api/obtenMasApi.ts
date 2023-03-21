import axios from 'axios';

import { Bank } from '../../models';

export const BASE_URL = 'https://dev.obtenmas.com/catom/api/challenge';

export const getBanks = async (): Promise<Bank[]> => {
  const response = await axios.get(`${BASE_URL}/banks`);
  return response.data;
};
