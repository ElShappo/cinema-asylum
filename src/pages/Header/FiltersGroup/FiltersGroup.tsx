import { ReactElement, Ref, forwardRef, useState } from "react";
import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";
import Filters from "../../../components/Filters/Filters";
import { useNavigate } from "react-router-dom";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FiltersGroup = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleFiltersOpen = () => {
    setOpen(true);
  };

  const handleFiltersClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        fullScreen={fullScreen}
        open={open}
        onClose={handleFiltersClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="error"
              onClick={handleFiltersClose}
              aria-label="close"
            >
              <CloseIcon sx={{ width: 32, height: 32 }} />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Выбор фильтров
            </Typography>
          </Toolbar>
        </AppBar>
        <Filters />
      </Dialog>
      <section className="flex grow flex-wrap gap-4 justify-center">
        <Button
          onClick={() => navigate("/favourite_movies")}
          className="text-xl normal-case"
          size="large"
          startIcon={
            <FavoriteBorderOutlinedIcon sx={{ width: 28, height: 28 }} />
          }
          color="error"
        >
          Любимые фильмы
        </Button>
        <Button
          className="text-xl normal-case"
          size="large"
          startIcon={<SettingsOutlinedIcon sx={{ width: 28, height: 28 }} />}
          color="error"
          onClick={handleFiltersOpen}
        >
          Фильтры
        </Button>
        <Button
          className="text-xl normal-case"
          size="large"
          startIcon={<HelpOutlineOutlinedIcon sx={{ width: 28, height: 28 }} />}
          color="error"
          onClick={() => navigate("/faq")}
        >
          FAQ
        </Button>
        <Button
          target="_blank"
          href="https://github.com/ElShappo/cinema-serata"
          className="text-xl normal-case"
          size="large"
          startIcon={<GitHubIcon sx={{ width: 28, height: 28 }} />}
          color="error"
        >
          GitHub
        </Button>
      </section>
    </>
  );
};

export default FiltersGroup;
