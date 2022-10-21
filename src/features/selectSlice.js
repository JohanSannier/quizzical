import { createSlice } from "@reduxjs/toolkit";

export const selectSlice = createSlice({
  name: "select",
  initialState: { category: null, difficulty: null },
  reducers: {
    setOptions: (state, { payload }) => {
      return {
        category: payload.category,
        difficulty: payload.difficulty,
      };
    },
  },
});

export const { setOptions } = selectSlice.actions;

export default selectSlice.reducer;
