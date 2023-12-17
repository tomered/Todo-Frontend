import { createSlice } from "@reduxjs/toolkit";

interface TodoListState {
  todoList: string[] | null;
}

const initialState: TodoListState = {
  todoList: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoItem: (state, action) => {
      state.todoList = state?.todoList?.length
        ? [...state.todoList, action.payload]
        : [action.payload];
    },
    removeTodoItem: (state, action) => {
      state.todoList =
        state.todoList?.filter((todoItem) => todoItem !== action.payload) || [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodoItem, removeTodoItem } = todoSlice.actions;

export default todoSlice.reducer;
