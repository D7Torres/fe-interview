import { createAsyncThunk } from '@reduxjs/toolkit';
import billsAPI from './api';

const fetchBills = createAsyncThunk('bills/fetchBillsStatus', async () => {
  const response = await billsAPI.fetchBills();
  return response;
});

export default {
  fetchBills,
};
