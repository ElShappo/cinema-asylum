import ReactDOM from "react-dom/client";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import Layout from "./pages/Layout";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/Body/Movies/Movies";
import FavouriteMovies from "./pages/Body/FavouriteMovies/FavouriteMovies";
import Movie from "./pages/Body/Movie/Movie";

const rootElement = document.getElementById("root")!;

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiDialog: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiModal: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});

ReactDOM.createRoot(rootElement).render(
  <ThemeProvider theme={darkTheme}>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Movies />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="favourite_movies" element={<FavouriteMovies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  </ThemeProvider>
);
