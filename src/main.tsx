import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import { COLORS } from "./colors.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Box
        sx={{
          bgcolor: COLORS.CARD_BG,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          height: "100vh", // Adjust the height as needed
          width: "50vw",
        }}
      >
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Box>
    </BrowserRouter>
  </React.StrictMode>
);
