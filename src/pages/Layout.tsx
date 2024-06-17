import { Divider } from "@mui/material";
import Header from "./Header/Header";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const Layout = () => {
  return (
    <>
      <ReactNotifications />
      <Header />
      <Divider />
    </>
  );
};

export default Layout;
