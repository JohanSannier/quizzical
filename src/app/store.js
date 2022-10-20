import { configureStore } from "@reduxjs/toolkit";
import answerSlice from "../features/answerSlice";

export default configureStore({
  reducer: {
    answers: answerSlice,
  },
});
