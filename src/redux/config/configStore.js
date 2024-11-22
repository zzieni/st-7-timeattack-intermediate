// TODO: store 에 slice에서 import한 reducer를 할당하세요.
import { configureStore } from '@reduxjs/toolkit';
import onCalculator from '../slices/calculatorSlice';

export default configureStore({
  reducer: {
    calculator: onCalculator,
  },
});
