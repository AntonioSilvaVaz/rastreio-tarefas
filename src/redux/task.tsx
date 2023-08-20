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
    },
    markAsSomething: (state, action: PayloadAction<{completed: boolean, taskId: string}>) =>{
      const task = state.tasks.filter(task => task.taskId === action.payload.taskId)[0];
      task.completed = action.payload.completed;
    }
  }
});

export const { createNewTask, deleteTask, markAsSomething } = counterSlice.actions;
export default counterSlice.reducer;