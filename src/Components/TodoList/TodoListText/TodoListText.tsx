import {
  Box,
  Button,
  FormControl,
  IconButton,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { COLORS } from "../../../colors";
import AppButton from "../../Buttons/AppButton";
import { useSelector, useDispatch } from "react-redux";
import { addTodoItem } from "../../../redux/slices/todoList.slice";
import { postTodoItem } from "../../../api/todo";
import { PostTodoListItemThunk } from "../../../redux/actions/todoList.action";
import { useAppSelector } from "../../../redux/hooks";
import {
  useGetAllTodosQuery,
  usePostTodoMutation,
} from "../../../redux/rtk/todoList";

export default function TodoListText() {
  const [description, setDescription] = useState("");
  // const postLoading = useAppSelector((state) => state.todoList.postLoading);
  const { refetch } = useGetAllTodosQuery();

  const dispatch = useDispatch();

  const [postTodo, { isLoading }] = usePostTodoMutation();

  const handleClick = async () => {
    //@ts-ignore
    // dispatch(PostTodoListItemThunk(description)).then(() => {
    //   setDescription("");
    //   refetch();
    // });
    postTodo(description);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  return (
    <Box sx={{ display: "flex", flex: 1, margin: 1, height: "6vh" }}>
      <FormControl sx={{ display: "flex", flex: 1, marginRight: 1 }}>
        <OutlinedInput
          sx={{ height: "6vh" }}
          placeholder="Add something to do.."
          value={description}
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
        />
      </FormControl>
      <AppButton
        disabled={isLoading}
        extraSx={{
          bgcolor: COLORS.ADD_BUTTON_BG,
          color: COLORS.ADD_BUTTON,
          //   borderRadius: 1,
          "&:hover": {
            backgroundColor: COLORS.ADD_BUTTON_HOVER,
          },
        }}
        aria-label="add"
        onClick={handleClick}
      >
        <AddIcon />
      </AppButton>
    </Box>
  );
}
