import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoListPage from "./pages/TodoListPage/TodoListPage";
import TodoListText from "./Components/TodoList/TodoListText/TodoListText";
import { Box } from "@mui/system";
import { COLORS } from "./colors";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <TodoListPage />
    </Box>
  );
}

export default App;
