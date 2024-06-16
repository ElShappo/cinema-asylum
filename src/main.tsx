import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./pages/Layout";

import "./index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <StyledEngineProvider injectFirst>
        <Layout />
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>
);
