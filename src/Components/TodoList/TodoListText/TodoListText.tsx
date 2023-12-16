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

export default function TodoListText() {
  const [description, setDescription] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  return (
    <Box sx={{ display: "flex", flex: 1, margin: 1 , height: '6vh'}}>
      <FormControl sx={{ display: "flex", flex: 1, marginRight: 1 }}>
        <OutlinedInput sx={{height: '6vh'}}
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
        onClick={() => {
          console.log(description);
          setDescription("");
        }}
      >
        <AddIcon />
      </AppButton>
    </Box>
  );
}
