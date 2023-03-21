import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Bank } from './../../models';

const initialState: { data: Bank[] } = {
  data: [],
};

export const banksSlice = createSlice({
  name: 'banks',
  initialState,
  reducers: {
    addBanks: (state, action: PayloadAction<Array<Bank>>) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBanks } = banksSlice.actions;

export default banksSlice.reducer;
