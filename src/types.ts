import { SxProps } from "@mui/system";

export interface TodoTask {
  description: string;
}

export type extandedSxProps = {
  [key: string]: string | number | SxProps;
};

export interface TodoListResponseType {
  todos: { description: string; id: number }[];
}
export interface PostTodoListItemResponseType {
  message: string;
  added: { description: string; id: number };
}
