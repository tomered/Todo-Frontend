import React, { useEffect } from "react";
import ListItem, { ListItemProps } from "./ListItem/ListItem";
import { Box, CircularProgress, Divider } from "@mui/material";
import { TodoTask } from "../../types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addTodoList, removeTodoItem } from "../../redux/slices/todoList.slice";
import { deleteTodoItem, getTodoList } from "../../api/todo";
import { GetTodoListThunk } from "../../redux/actions/todoList.action";
import { useGetAllTodosQuery } from "../../redux/rtk/todoList";

interface TodoListProps {
  items?: TodoTask[];
}

export default function TodoList({
  items = [{ description: "feed my dog" }, { description: "finish homework" }],
}: TodoListProps) {
  // const todoList = useAppSelector((state) => state.todoList.todoList);
  // const loading = useAppSelector((state) => state.todoList.loading);
  const dispatch = useAppDispatch();
  const { data, isLoading, refetch } = useGetAllTodosQuery();
  // useEffect(() => {
  //   dispatch(GetTodoListThunk());
  // }, []);

  return (
    <Box sx={{ width: "100%" }}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        data != undefined &&
        //@ts-ignore
        data.map((todoTask) => (
          <>
            <Divider />
            <ListItem
              todoItem={todoTask}
              removeButtonClickHandler={async () => {
                const response = await deleteTodoItem(todoTask.id);
                refetch();
                // dispatch(removeTodoItem(response.deletedID));
              }}
            />
          </>
        ))
      )}
    </Box>
  );
}
