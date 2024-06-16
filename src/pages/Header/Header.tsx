import { Button } from "@mui/material";
import Logo from "./Logo/Logo";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
  return (
    <header className="bg-primary flex max-md:flex-col justify-center items-center flex-wrap py-4">
      <Logo />
      <section className="flex grow flex-wrap gap-4 justify-center">
        <Button
          className="text-xl normal-case"
          size="large"
          // variant="contained"
          startIcon={<SearchOutlinedIcon sx={{ width: 28, height: 28 }} />}
          color="error"
        >
          <div className="py-1">Поиск по названию</div>
        </Button>
        <Button
          className="text-xl normal-case"
          size="large"
          // variant="contained"
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
          // variant="contained"
          startIcon={<SettingsOutlinedIcon sx={{ width: 28, height: 28 }} />}
          color="error"
        >
          Фильтры
        </Button>
        <Button
          className="text-xl normal-case"
          size="large"
          // variant="contained"
          startIcon={<HelpOutlineOutlinedIcon sx={{ width: 28, height: 28 }} />}
          color="error"
        >
          FAQ
        </Button>
        <Button
          className="text-xl normal-case"
          size="large"
          // variant="contained"
          startIcon={<GitHubIcon sx={{ width: 28, height: 28 }} />}
          color="error"
        >
          GitHub
        </Button>
      </section>
      {/* <Filters /> */}
    </header>
  );
};

export default Header;
