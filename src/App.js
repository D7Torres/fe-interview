import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import billsSlice from './domains/bills/slice';
import AllBillsContainer from './components/AllBills/AlllBillsContainer.ts';

const store = configureStore({
  reducer: billsSlice.reducer,
});

const App = () => (
  <Provider store={store}>
    <AllBillsContainer />
  </Provider>
);

export default App;
