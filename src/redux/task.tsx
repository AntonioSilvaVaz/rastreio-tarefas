import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskType } from "../types/types";

export const counterSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [] as TaskType[],
  },
  reducers: {
    createNewTask: (state, action: PayloadAction<TaskType>) => {
      state.tasks.push(action.payload);
    },
  }
});

export const { createNewTask } = counterSlice.actions;
export default counterSlice.reducer;