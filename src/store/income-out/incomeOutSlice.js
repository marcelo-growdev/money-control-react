import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const adapter = createEntityAdapter({
  selectId: (incomeOut) => incomeOut.uid,
});

export const { selectAll, selectById } = adapter.getSelectors((state) => state.incomeOut);

export const incomeOutSlice = createSlice({
  name: 'IncomeOut',
  initialState: adapter.getInitialState({}),
  reducers: {
    addOne: adapter.addOne,
    removeOne: adapter.removeOne,
  },
});

export const { addOne, removeOne } = incomeOutSlice.actions;

export default incomeOutSlice.reducer;
