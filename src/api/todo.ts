import axios from "axios";
import { PostTodoListItemResponseType, TodoListResponseType } from "../types";
import { promises } from "node:dns";

export const getTodoList = async (): Promise<TodoListResponseType> => {
  const response = await axios.get("http://localhost:3000/todos");
  console.log(response.data);
  return response.data;
};

export const postTodoItem = async (description: string): Promise<PostTodoListItemResponseType> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Make the post request
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
