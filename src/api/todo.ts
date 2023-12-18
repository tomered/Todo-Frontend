import axios from "axios";

export const getTodoList = async () => {
  const response = await axios.get("http://localhost:3000/todos");
  console.log(response.data);
  return response.data;
};

export const postTodoItem = async (description: string) => {
  const response = await axios.post("http://localhost:3000/todo", {
    description,
  });
  console.log(response.data);
  return response.data;
};
export const deleteTodoItem = async (id: number) => {
  const response = await axios.delete(
    `http://localhost:3000/todos/${id.toString()}`
  );
  console.log(response.data);
  return response.data;
};
