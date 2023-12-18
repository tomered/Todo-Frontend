import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TodoListState {
  todoList: { description: string; id: number }[] | null;
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
    addTodoList: (state, action) => {
      state.todoList = action.payload;
    },
    removeTodoItem: (state, action: PayloadAction<number>) => {
      state.todoList =
        state.todoList?.filter((todoItem) => todoItem.id !== action.payload) ||
        [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodoItem, removeTodoItem, addTodoList } = todoSlice.actions;

export default todoSlice.reducer;
