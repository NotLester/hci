import React from "react";
import Maingooter from "../footer/Mainfooter/Maingooter";
import Subfooter from "../footer/Subfooter/Subfooter";
import Mainnav from "../Nav/Mainnav/Mainnav";
import Combinenav from "../Nav/Combinednav/Combinenav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Combinenav />
      <Maingooter />
      <Subfooter />
      <Outlet />
    </div>
  );
};

export default Layout;
