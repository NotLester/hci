import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Mainnav from "../Nav/Mainnav/Mainnav";
import "./header.css";

const Header = () => {
  const [counter, setCounter] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      <div className="main__header__container">

        <div className="header__container">
          <div className="header__details__container">
            <h3 className="header__top__topic">You too, can endPoverty!</h3>
            <p className="header__bottom__para">
              Supporting Entrepreneurs with economic and spiritual resources to
              enable sustainable prosperity.
            </p>
            <button className="header__btn">Connect with us</button>
          </div>
        </div>
        <div className="header__counter">
          <div className="header__counter__details">
            {Header && (
              <>
                <h2 className="counter">
                  <CountUp start={0} end={434} duration={2} delay={2} />M
                </h2>
              </>
            )}
            <p className="counter__para">
              Africa’s youth population – highest globally.
            </p>
          </div>
          <div className="header__counter__details">
            {Header && (
              <>
                <h2 className="counter">
                  <CountUp start={0} end={12} duration={2} delay={5} />M
                </h2>
              </>
            )}
            <p className="counter__para">
              Youth enter the job market every year in Africa.
            </p>
          </div>
          <div className="header__counter__details">
            {Header && (
              <>
                <h2 className="counter">
                  <CountUp start={0} end={4} duration={2} delay={2} />M
                </h2>
              </>
            )}

            <p className="counter__para">
              Formal jobs created annually in Africa.
            </p>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Header;
