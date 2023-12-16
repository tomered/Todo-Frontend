import React from "react";
import ListItem, { ListItemProps } from "./ListItem/ListItem";
import { Box, Divider } from "@mui/material";

interface TodoListProps {
  items: ListItemProps[];
}

export default function TodoList({
  items = [{ description: "feed my dog" }, { description: "finish homework" }],
}: TodoListProps) {
  return (
    <Box sx={{ width: "30vw" }}>
      {items.map((todo) => (
        <><Divider /><ListItem description={todo.description} /></>
      ))}
    </Box>
  );
}
