import React from "react";
import TodoList from "../../Components/TodoList/TodoList";
import { Box, Card, Typography } from "@mui/material";
import { COLORS } from "../../colors";
import TodoListText from "../../Components/TodoList/TodoListText/TodoListText";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Oswald:wght@700&display=swap');
</style>;

export default function TodoListPage() {
  return (
    <Box sx={{margin: '5px', width: '40vw'}}>
      <Card sx={{}}>
        <Typography sx={{ fontFamily: "Inter", fontSize: "35px" }}>
          MY TODOS
        </Typography>
        <TodoListText />
        <TodoList />
      </Card>
    </Box>
  );
}
