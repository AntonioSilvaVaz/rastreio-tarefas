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
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.taskId !== action.payload);
    }
  }
});

export const { createNewTask, deleteTask } = counterSlice.actions;
export default counterSlice.reducer;