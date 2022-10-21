import { configureStore } from "@reduxjs/toolkit";
import answerSlice from "../features/answerSlice";
import selectSlice from "../features/selectSlice";

export default configureStore({
  reducer: {
    answers: answerSlice,
    select: selectSlice,
  },
});
