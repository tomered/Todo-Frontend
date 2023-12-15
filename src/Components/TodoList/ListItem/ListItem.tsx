import { Box, Button, Checkbox, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../../../colors";

interface ListItemProps {
  description: string;
}

export default function ListItem({ description }: ListItemProps) {
  return (
    <Box sx={{ display: "flex", flex: 1, alignItems: "center" }}>
      <Checkbox />
      <Typography sx={{ display: "flex", width: "100%" }}>
        {description}
      </Typography>
      <Button
        variant="contained"
        sx={{
          bgcolor: COLORS.RED_BUTTON,
          textTransform: "none",
          "&:hover": {
            backgroundColor: COLORS.RED_BUTTON_HOVER,
          },
        }}
      >
        remove
      </Button>
    </Box>
  );
}
