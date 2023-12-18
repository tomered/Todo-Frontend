import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  GetTodoListThunk,
  PostTodoListItemThunk,
} from "../actions/todoList.action";
import { PostTodoListItemResponseType } from "../../types";

interface TodoListState {
  todoList: { description: string; id: number }[] | null;
  loading: boolean;
  postLoading: boolean;
}

const initialState: TodoListState = {
  todoList: null,
  loading: false,
  postLoading: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(GetTodoListThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetTodoListThunk.fulfilled, (state, action) => {
        state.todoList = action.payload.todos;
        state.loading = false;
      })
      .addCase(GetTodoListThunk.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(PostTodoListItemThunk.pending, (state, action) => {
        state.postLoading = true;
      })
      .addCase(
        PostTodoListItemThunk.fulfilled,
        (
          state,
          action: PayloadAction<PostTodoListItemResponseType["added"]>
        ) => {
          state.todoList?.push(action.payload);
          state.postLoading = false;
        }
      )
      .addCase(PostTodoListItemThunk.rejected, (state, action) => {
        state.postLoading = false;
      });
  },
  reducers: {
    addTodoItem: (
      state,
      action: PayloadAction<{ description: string; id: number }>
    ) => {
      state.todoList = state?.todoList?.length
        ? [...state.todoList, action.payload]
        : [action.payload];
    },
    addTodoList: (
      state,
      action: PayloadAction<{ description: string; id: number }[]>
    ) => {
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
