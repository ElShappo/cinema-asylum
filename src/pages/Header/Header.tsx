import Logo from "./Logo/Logo";
import FiltersGroup from "./FiltersGroup/FiltersGroup";

const Header = () => {
  return (
    <header className="bg-primary flex max-md:flex-col justify-center items-center flex-wrap py-4">
      <Logo />
      <FiltersGroup />
    </header>
  );
};

export default Header;
