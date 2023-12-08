import { configureStore, createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    num1: 0,
    num2: 0,
    result: 0,
    error: null,
  },
  reducers: {
    setNum1: (state, action) => {
      state.num1 = action.payload;
    },
    setNum2: (state, action) => {
      state.num2 = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setNum1, setNum2, setResult, setError } =
  calculatorSlice.actions;
export const selectCalculator = (state) => state.calculator;

export const store = configureStore({
  reducer: {
    calculator: calculatorSlice.reducer,
  },
});
