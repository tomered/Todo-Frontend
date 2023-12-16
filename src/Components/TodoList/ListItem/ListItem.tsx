import { Box, Button, Checkbox, SxProps, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../../../colors";

const removeButtonSx = {
  bgcolor: COLORS.RED_BUTTON,
  textTransform: "none",
  "&:hover": {
    backgroundColor: COLORS.RED_BUTTON_HOVER,
  },
};

export interface ListItemProps {
  description: string;
  removeButtonExtraSx?: any;
}

export default function ListItem({
  description,
  removeButtonExtraSx = {},
}: ListItemProps) {
  return (
    <Box sx={{ display: "flex", flex: 1, alignItems: "center" , margin: 1}}>
      <Checkbox />
      <Typography sx={{ display: "flex", width: "100%" }}>
        {description}
      </Typography>
      <Button variant="contained" sx={{...removeButtonSx, ...removeButtonExtraSx}}>
        remove
      </Button>
    </Box>
  );
}
