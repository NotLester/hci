import React from "react";
import Mainnav from "../Mainnav/Mainnav";
import Navheader from "../Navheader/Navheader";
import "./combinenav.css";

const Combinenav = () => {
  return (
    <div className="combine__nav__container">
      <Navheader />
      <Mainnav />
    </div>
  );
};

export default Combinenav;
