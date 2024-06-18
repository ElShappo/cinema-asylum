import { Divider } from "@mui/material";
import Header from "./Header/Header";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ReactNotifications />
      <Header />
      <Divider />
      <Outlet />
    </>
  );
};

export default Layout;
