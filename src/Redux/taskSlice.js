import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [], // Use an object with an array to store tasks properly
};

const taskSlice = createSlice({
  name: "tasks",
  initialState, 
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, { name: action.payload }]; // Ensure immutability
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((_, index) => index !== action.payload);
    },
    updateTask: (state, action) => {
      const { index, name } = action.payload;
      if (state.tasks[index]) {
        state.tasks[index] = { ...state.tasks[index], name };
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
