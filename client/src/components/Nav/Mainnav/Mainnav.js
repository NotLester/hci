import React, { useContext, useEffect, useState } from "react";
import "./mainnav.css";
import { Link } from "react-router-dom";
import { GrAddCircle } from "react-icons/gr";
import { FaDonate } from "react-icons/fa";
import { UserContext } from "../../../context/UserContext";

const Mainnav = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:5000/auth/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userImp) => {
        setUserInfo(userImp);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:5000/auth/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
    window.location.reload();
  }

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 1) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const goContact = () => {
    window.location = "/sessions";
  };

  const username = userInfo?.username;
  return (
    <div
      className={
        colorChange
          ? "main__nav__container colorChange"
          : "main__nav__container"
      }
    >
      <div className="navlogo__title__section">
        <h2 className="navlogo__title">endpoverty</h2>
      </div>
      <div className="nav__ul__section">
        <Link to="/">
          <li
            className={
              colorChange ? "nav__li__section colorChange" : "nav__li__section"
            }
          >
            home
          </li>
        </Link>
        <Link to="/about-us">
          <li
            className={
              colorChange ? "nav__li__section colorChange" : "nav__li__section"
            }
          >
            about us
          </li>
        </Link>
        <li
          className={
            colorChange ? "nav__li__section colorChange" : "nav__li__section"
          }
        >
          contact us
        </li>
        <Link to="/sessions">
          <li
            className={
              colorChange ? "nav__li__section colorChange" : "nav__li__section"
            }
          >
            blogs
          </li>
        </Link>
        <li
          className={
            colorChange ? "nav__li__section colorChange" : "nav__li__section"
          }
        >
          jobs
        </li>
        <Link to ='/Events'>
          <li
            className={
              colorChange ? "nav__li__section colorChange" : "nav__li__section"
            }
          >
            events
          </li>
        </Link>
      </div>

      <div className="nav__credention__btn__section">
        <Link to="/donate">
          <button className="nav__btn">
            <FaDonate />
          </button>
        </Link>
        {username && (
          <>
            <Link to="/create">
              <button className="nav__btn">
                <GrAddCircle className="dfg" />
                create post
              </button>
            </Link>
            <button className="nav__btn" onClick={logout}>
              logout {username}
            </button>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">
              <button className="nav__btn">login</button>
            </Link>
            <Link to="/Signup">
              <button className="nav__btn">register</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Mainnav;
