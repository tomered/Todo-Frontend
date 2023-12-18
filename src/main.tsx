import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Box } from "@mui/system";
import { COLORS } from "./colors.ts";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import './api/todo.ts'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
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
    </Provider>
  </React.StrictMode>
);
