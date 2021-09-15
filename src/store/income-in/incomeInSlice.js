import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const adapter = createEntityAdapter({
  selectId: (incomeIn) => incomeIn.uid,
});

export const { selectAll, selectById } = adapter.getSelectors((state) => state.incomeIn);

export const incomeInSlice = createSlice({
  name: 'IncomeIn',
  initialState: adapter.getInitialState({}),
  reducers: {
    addOne: adapter.addOne,
    removeOne: adapter.removeOne,
  },
});

export const { addOne, removeOne } = incomeInSlice.actions;

export default incomeInSlice.reducer;
