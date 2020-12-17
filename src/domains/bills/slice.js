// eslint-disable-file no-param-reassign TODO Use overrides instead
import { createSlice } from '@reduxjs/toolkit';
// @ts-ignore
import billThunks from './thunks';

const { fetchBills } = billThunks;

const billsSlice = createSlice({
  name: 'bills',
  initialState: { bills: { bills: [] } },
  extraReducers: {
    [fetchBills.fulfilled]: (state, action) => {
      state.bills.bills = action.payload;
    },
  },
});

export default billsSlice;
