// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.
// 아래 공식문서에서 제공하는 예시 코드를 수정해서 완성하세요.

import { createSlice } from '@reduxjs/toolkit';

const initialState = { calculatorData: 0 };

export const counterSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    add: (state, action) => {
      state.calculatorData += action.payload;
    },
    sub: (state, action) => {
      state.calculatorData -= action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, sub } = counterSlice.actions;

export default counterSlice.reducer;
