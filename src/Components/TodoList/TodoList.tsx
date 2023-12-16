import React from "react";
import ListItem, { ListItemProps } from "./ListItem/ListItem";
import { Box, Divider } from "@mui/material";
import { TodoTask } from "../../types";

interface TodoListProps {
  items: TodoTask[];
}

export default function TodoList({
  items = [{ description: "feed my dog" }, { description: "finish homework" }],
}: TodoListProps) {
  return (
    <Box sx={{ width: "30vw" }}>
      {items.map((todoTask) => (
        <>
          <Divider />
          <ListItem
            description={todoTask.description}
            removeButtonClickHandler={() => console.log(todoTask)}
          />
        </>
      ))}
    </Box>
  );
}
