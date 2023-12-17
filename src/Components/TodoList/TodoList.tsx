import React from "react";
import ListItem, { ListItemProps } from "./ListItem/ListItem";
import { Box, Divider } from "@mui/material";
import { TodoTask } from "../../types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { removeTodoItem } from "../../redux/slices/todoList.slice";

interface TodoListProps {
  items?: TodoTask[];
}

export default function TodoList({
  items = [{ description: "feed my dog" }, { description: "finish homework" }],
}: TodoListProps) {
  const todoList = useAppSelector((state) => state.todoList.todoList);
  const dispatch = useAppDispatch();

  return (
    <Box sx={{ width: "100%" }}>
      {todoList !== null &&
        todoList.map((todoTask) => (
          <>
            <Divider />
            <ListItem
              description={todoTask}
              removeButtonClickHandler={() =>
                dispatch(removeTodoItem(todoTask))
              }
            />
          </>
        ))}
    </Box>
  );
}
