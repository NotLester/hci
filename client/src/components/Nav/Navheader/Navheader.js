import React from "react";
import "./navheader.css";
import {
  
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsTelephoneFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Navheader = () => {
  return (
    <div className="nav__header__container">
      <div className="nav__header__left">
        <div className="nav__header__connect__list">
          <BsTelephoneFill className="top__icon"/>
          <h3 className="connect__list__name">+1 (571) 278-6061</h3>
        </div>
        <div className="nav__header__connect__list">
          <MdEmail className="top__icon"/>
          <h3 className="connect__list__name">info@endpoverty.org</h3>
        </div>
      </div>
      <div className="nav__header__right">
        <BsFacebook className="right__icon"/>
        <BsTwitter className="right__icon"/>
        <BsInstagram className="right__icon"/>
      </div>
    </div>
  );
};

export default Navheader;
