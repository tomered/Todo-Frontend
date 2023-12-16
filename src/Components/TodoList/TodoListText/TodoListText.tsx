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

export default function TodoListText() {
  const [description, setDescription] = useState("");

  const handleChange = (event: any) => {
    setDescription(event.target.value);
  };
  return (
    <Box sx={{ display: "flex", width: "30vw" }}>
      <FormControl sx={{ width: "100%", marginRight: 2 }}>
        <OutlinedInput
          placeholder="Add something to do.."
          value={description}
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
        />
      </FormControl>
      <Button
        sx={{
          bgcolor: COLORS.ADD_BUTTON_BG,
          color: COLORS.ADD_BUTTON,
          borderRadius: 1,
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
      </Button>
    </Box>
  );
}
