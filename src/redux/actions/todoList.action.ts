import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTodoList, postTodoItem } from "../../api/todo";
import {
  PostTodoListItemResponseType,
  TodoListResponseType,
} from "../../types";
import { todo } from "node:test";
import { addTodoItem } from "../slices/todoList.slice";

export const GetTodoListThunk = createAsyncThunk(
  "todo/getAll",
  async (_, { rejectWithValue }) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    let todoList: TodoListResponseType;
    try {
      todoList = await getTodoList();
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
    return todoList;
  }
);
export const PostTodoListItemThunk = createAsyncThunk(
  "todo/post",
  async (description: string, { rejectWithValue }) => {
    let todoItem: PostTodoListItemResponseType;
    try {
      todoItem = await postTodoItem(description);
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
    return todoItem.added;
  }
);
