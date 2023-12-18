import React, { useEffect } from "react";
import ListItem, { ListItemProps } from "./ListItem/ListItem";
import { Box, Divider } from "@mui/material";
import { TodoTask } from "../../types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addTodoList, removeTodoItem } from "../../redux/slices/todoList.slice";
import { deleteTodoItem, getTodoList } from "../../api/todo";

interface TodoListProps {
  items?: TodoTask[];
}

export default function TodoList({
  items = [{ description: "feed my dog" }, { description: "finish homework" }],
}: TodoListProps) {
  const todoList = useAppSelector((state) => state.todoList.todoList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const execute = async () => {
      const todos = (await getTodoList()).todos;
      dispatch(addTodoList(todos));
    };
    execute();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      {todoList !== null &&
        todoList.map((todoTask) => (
          <>
            <Divider />
            <ListItem
              todoItem={todoTask}
              removeButtonClickHandler={async () => {
                const response = await deleteTodoItem(todoTask.id);

                dispatch(removeTodoItem(response.deletedID));
              }}
            />
          </>
        ))}
    </Box>
  );
}
