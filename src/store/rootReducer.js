import { combineReducers } from '@reduxjs/toolkit';

import incomeIn from './income-in/incomeInSlice';
import incomeOut from './income-out/incomeOutSlice';
import showAlert from './alert/alertSlice';

export default combineReducers({
  incomeIn,
  incomeOut,
  showAlert,
});
