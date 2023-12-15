import { Box, Button, Checkbox, Typography } from "@mui/material";
import React from "react";

export default function ListItem() {
  return (
    <Box sx={{ display: "flex", flex: 1, alignItems: "center" }}>
      <Checkbox />
      <Typography sx={{ display: "flex" , width: '100vh'}}>option</Typography>
      <Button variant="contained" sx={{bgcolor: 'red'}}>Remove</Button>
    </Box>
  );
}
