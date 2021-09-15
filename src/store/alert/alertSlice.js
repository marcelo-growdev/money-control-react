import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    update(state, payload) {
      return payload;
    },
  },
});

export const { update } = alertSlice.actions;
export default alertSlice.reducer;
