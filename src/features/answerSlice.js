import { createSlice } from "@reduxjs/toolkit";

export const answerSlice = createSlice({
  name: "answers",
  initialState: [],
  reducers: {
    recapQuestion: (state, { payload }) => {
      if (payload.selectedAnswer !== null) {
        if (state.length === 0) {
          state.push(payload);
        } else {
          const index = state.findIndex((element) => element.id === payload.id);
          if (index > -1) {
            state.splice(index, 1);
            state.push(payload);
          } else {
            state.push(payload);
          }
        }
      }
    },
    clearQuiz: (state) => {
      return (state = []);
    },
  },
});

export const { recapQuestion, clearQuiz } = answerSlice.actions;

export default answerSlice.reducer;
