import React from "react";
import "../footer.css";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

const Maingooter = () => {
  return (
    <div className="mainfooter__container">
      <div className="main__footer__section">
        <div className="main__footer__card">
          <h2 className="main__footer__title">POVERTY</h2>
          <p className="main__footer__para">
            Since 1985, endPoverty has helped build over 400,000 entrepreneurs
            in 47 countries around the world. We continue to work towards a day
            when individuals, families and communities trapped in poverty become
            economically and spiritually empowered.
          </p>
          <div className="footer__icon__set">
            <BsTwitter className="footer__icon"/>
            <BsFacebook className="footer__icon"/>
            <BsInstagram className="footer__icon"/>
          </div>
        </div>
        <div className="main__footer__card">
          <h2 className="main__footer__title">Quick Links</h2>
          <ul className="main__footer__ul">
            <li className="main__footer__li">home</li>
            <li className="main__footer__li">about us </li>
            <li className="main__footer__li">contact us</li>
            <li className="main__footer__li">sessions</li>
            <li className="main__footer__li">jobs</li>
          </ul>
        </div>
        <div className="main__footer__card">
          <h2 className="main__footer__title">Contact Info</h2>
          <ul className="main__contact__ul">
            <li className="main__footer__li tr">call us</li>
            <li className="main__footer__li tv">+1 (571) 278-6061</li>
          </ul>
          <ul className="main__contact__ul">
            <li className="main__footer__li tr">mail us</li>
            <li className="main__footer__li tv">info@endpoverty.org</li>
          </ul>
          <ul className="main__contact__ul">
            <li className="main__footer__li tr">visit us</li>
            <li className="main__footer__li tv">Reston, VA 20190, USA</li>
          </ul>
        </div>
        <div className="main__footer__card">
          <h2 className="main__footer__title">Subscribe to Our Newsletter</h2>
          <p className="main__footer__para">
            Since 1985, endPoverty has helped build over 400,000 entrepreneurs
            in 47 countries around the world.
          </p>
          <button className="footer__sub__btn">Join our mailing list</button>
        </div>
      </div>
    </div>
  );
};

export default Maingooter;
