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
const allSavedTasks = localStorage.getItem('tasks');
const possibleTasks: TaskType[] = allSavedTasks ? JSON.parse(allSavedTasks) : [];

export const counterSlice = createSlice({
  name: "task",
  initialState: {
    tasks: possibleTasks,
    allTasks: possibleTasks,
  },
  reducers: {
    createNewTask: (state, action: PayloadAction<TaskType>) => {
      state.allTasks.push(action.payload);
      state.tasks = activeFilter(state.allTasks);
      localStorage.setItem('tasks', JSON.stringify(state.allTasks));
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.allTasks = state.allTasks.filter(task => task.taskId !== action.payload);
      state.tasks = activeFilter(state.allTasks);
      localStorage.setItem('tasks', JSON.stringify(state.allTasks));
    },
    markAsSomething: (state, action: PayloadAction<{ completed: boolean, taskId: string }>) => {
      const task = state.allTasks.filter(task => task.taskId === action.payload.taskId)[0];
      task.completed = action.payload.completed;
      state.tasks = activeFilter(state.allTasks);
      localStorage.setItem('tasks', JSON.stringify(state.allTasks));
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
    },
    moveTaskPosition: (state, action: PayloadAction<{ taskId: string, direction: number }>) => {
      const { taskId, direction } = action.payload;
      const currIndex = state.allTasks.findIndex((task) => task.taskId == taskId);
      const copyArr = [...state.allTasks];

      if (currIndex + direction < 0 || currIndex + direction > copyArr.length - 1) return;
      [copyArr[currIndex], copyArr[currIndex + direction]] = [copyArr[currIndex + direction], copyArr[currIndex]];
      state.allTasks = copyArr;
      state.tasks = activeFilter(state.allTasks);
      localStorage.setItem('tasks', JSON.stringify(state.allTasks));
    },
    updateTask: (state, action: PayloadAction<{ taskId: string, title: string, note: string, date: string }>) => {
      const { taskId, title, note, date } = action.payload;
      let task = state.allTasks.filter(task => task.taskId === taskId)[0];
      task.title = title;
      task.note = note;
      task.date = date;
      state.tasks = activeFilter(state.allTasks);
      localStorage.setItem('tasks', JSON.stringify(state.allTasks));
    },
  }
});

export const {
  createNewTask, deleteTask, markAsSomething,
  showAllTasks, showCompletedTasks, showUncompletedTasks,
  moveTaskPosition, updateTask
} = counterSlice.actions;
export default counterSlice.reducer;