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

export default function TodoListText() {
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleClick = async () => {
    console.log(description);
    const response = await postTodoItem(description);
    dispatch(addTodoItem(response.added));
    setDescription("");
    console.log(response);
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
