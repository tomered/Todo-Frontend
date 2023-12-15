import { Box, Button, Checkbox, Typography } from "@mui/material";
import React from "react";

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
          bgcolor: "red",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#8c1c03",
          },
        }}
      >
        remove
      </Button>
    </Box>
  );
}
