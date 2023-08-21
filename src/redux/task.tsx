import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskType } from "../types/types";

function filterCompletedTasks(arr: TaskType[]) {
  const filteredArr = arr.filter(task => task.completed);
  return filteredArr;
};

function filterUncompletedTasks(arr: TaskType[]) {
  const filteredArr = arr.filter(task => !task.completed);
  return filteredArr;
};

function filterAllTasks(arr: TaskType[]) {
  return arr;
}

let activeFilter = filterAllTasks;

export const counterSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [] as TaskType[],
    allTasks: [] as TaskType[],
  },
  reducers: {
    createNewTask: (state, action: PayloadAction<TaskType>) => {
      state.allTasks.push(action.payload);
      state.tasks = activeFilter(state.allTasks);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.allTasks = state.allTasks.filter(task => task.taskId !== action.payload);
      state.tasks = activeFilter(state.allTasks);
    },
    markAsSomething: (state, action: PayloadAction<{ completed: boolean, taskId: string }>) => {
      const task = state.allTasks.filter(task => task.taskId === action.payload.taskId)[0];
      task.completed = action.payload.completed;
      state.tasks = activeFilter(state.allTasks);
    },
    showAllTasks: (state) => {
      state.tasks = filterAllTasks(state.allTasks);
      activeFilter = filterAllTasks;
    },
    showCompletedTasks: (state) => {
      state.tasks = filterCompletedTasks(state.allTasks);
      activeFilter = filterCompletedTasks;
    },
    showUncompletedTasks: (state) => {
      state.tasks = filterUncompletedTasks(state.allTasks);
      activeFilter = filterUncompletedTasks;
    }
  }
});

export const {
  createNewTask, deleteTask, markAsSomething,
  showAllTasks, showCompletedTasks, showUncompletedTasks
} = counterSlice.actions;
export default counterSlice.reducer;