import React from "react";
import Combinenav from "../Nav/Combinednav/Combinenav";
import Subfooter from "../footer/Subfooter/Subfooter";
import Maingooter from "../footer/Mainfooter/Maingooter";
import "./donate.css";
import { Link } from "react-router-dom";

const Donate = () => {
  return (
    <div>
      <Combinenav />

      <div className="donate__container">
        <div className="donate__img">
          <img
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="donate__img"
          />
        </div>

        <h2 className="donate__give"> : more ways to give : </h2>

        <div className="donate__cards">
          <div className="donate__mini__card">
            <div className="mini__imger">
              <img
                src="https://www.worldvision.org/wp-content/uploads/2018/10/D485-1043-063-150x150.png"
                alt=""
                className="mini__img"
              />
            </div>

            <h2 className="donate__title">Sponsorship</h2>

            <p className="donate__para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam debitis nostrum eum qui optio, sed illum dicta veniam
              mollitia vero.
            </p>
            <button className="donate__btn">
              <Link to="/sponsor-a-child">sponsor now</Link>
            </button>
          </div>
          <div className="donate__mini__card">
            <div className="mini__imger">
              <img
                src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt=""
                className="mini__img"
              />
            </div>
            <h2 className="donate__title">Gift Catalog</h2>
            <p className="donate__para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam debitis nostrum eum qui optio, sed illum dicta veniam
              mollitia vero.
            </p>
            <button className="donate__btn">shop now</button>
          </div>
          <div className="donate__mini__card">
            <div className="mini__imger">
              <img
                src="https://www.worldvision.org/wp-content/uploads/2021/04/Philanthropy-1-150x150.png"
                alt=""
                className="mini__img"
              />
            </div>
            <h2 className="donate__title">Philanthropy</h2>
            <p className="donate__para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam debitis nostrum eum qui optio, sed illum dicta veniam
              mollitia vero.
            </p>
            <button className="donate__btn">learn more</button>
          </div>
        </div>
      </div>
      <Maingooter />
      <Subfooter />
    </div>
  );
};

export default Donate;
