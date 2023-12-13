import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoListPage from "./pages/TodoListPage/TodoListPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TodoListPage />
    </>
  );
}

export default App;
