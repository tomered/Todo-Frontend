import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./slices/todoList.slice";
import { todoApi } from "./rtk/todoList";

export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
    [todoApi.reducerPath]: todoApi.reducer, // Add the todoApi reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware), // Add the todoApi middleware
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
