import React from "react";
import { extandedSxProps } from "../../types";
import { Button } from "@mui/material";
import { COLORS } from "../../colors";

interface AppButtonProps {
  extraSx?: extandedSxProps;
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const baseSx: extandedSxProps = {
  bgcolor: COLORS.RED_BUTTON,
  textTransform: "none",
  "&:hover": {
    backgroundColor: COLORS.RED_BUTTON_HOVER,
  },
  minWidth: "80px",
  color: COLORS.ADD_BUTTON
};

export default function AppButton({
  extraSx = {},
  children,
  disabled = false,
  onClick,
}: AppButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      sx={{ ...baseSx, ...extraSx }}
    >
      {children}
    </Button>
  );
}
