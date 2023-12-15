import React from "react";
import ListItem from "./ListItem/ListItem";
import { Box } from "@mui/material";

export default function TodoList() {
  return (
    <Box sx={{width: '30vw'}}>
      <ListItem description="feed my cat" />
      <ListItem description="feed my dog" />
      <ListItem description="feed my cat" />
    </Box>
  );
}
