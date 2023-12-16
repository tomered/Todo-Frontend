import { Box, Button, Checkbox, SxProps, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../../../colors";
import AppButton from "../../Buttons/AppButton";


export interface ListItemProps {
  description: string;
  removeButtonExtraSx?: any;
  removeButtonClickHandler: () => void;
}

export default function ListItem({
  description,
  removeButtonExtraSx = {},
  removeButtonClickHandler = () => {},
}: ListItemProps) {
  return (
    <Box sx={{ display: "flex", flex: 1, alignItems: "center", margin: 1 }}>
      <Checkbox />
      <Typography sx={{ display: "flex", width: "100%" }}>
        {description}
      </Typography>
      <AppButton
        extraSx={{...removeButtonExtraSx}}
        onClick={removeButtonClickHandler}
      >
        remove
      </AppButton>
    </Box>
  );
}
