import { Input } from "@mui/material";
import Logo from "./Logo/Logo";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Filters from "./Filters/Filters";

const Header = () => {
  return (
    <header className="bg-primary flex items-center">
      <Logo />
      <Input
        endAdornment={<SearchOutlinedIcon className="pl-4" />}
        className="text-white"
        placeholder="Название фильма:"
      />
      <Filters />
    </header>
  );
};

export default Header;
