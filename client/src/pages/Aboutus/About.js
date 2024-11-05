import React from "react";
import "./bout.css";
import Combinenav from "../../components/Nav/Combinednav/Combinenav";
import Maingooter from "../../components/footer/Mainfooter/Maingooter";
import Subfooter from "../../components/footer/Subfooter/Subfooter";

const About = () => {
  return (
    <div className="about__container">
      <Combinenav />
      <div className="about__card">
        <div className="about__details">
          <h2 className="about__title">about us</h2>
          <p className="about__para">
            What does CARE do? We save lives, defeat poverty, achieve social
            justice, and fight for women and girls.
          </p>
        </div>

        <img
          className="about__img"
          src="https://images.unsplash.com/photo-1541482492732-6fef23322336?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt=""
        />
      </div>
      <p className="about__sub__para">
        For 75 years, CARE has led the way to a better life for the world’s most
        vulnerable people. This year, CARE and partners worked in 111 countries,
        reaching more than 174 million people around the world through 1,600
        projects.
      </p>
      <div className="about__view">
        <div className="about__left__view">
          <img
            src="https://images.unsplash.com/photo-1543689604-6fe8dbcd1f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            alt=""
          />
        </div>
        <div className="about__right__view">
          <h2 className="df">mission & vision</h2>
          <p className="df__para">
            CARE USA is dedicated to ending poverty and improving the lives of
            women, girls, and vulnerable populations around the world. Our core
            values of transformation, integrity, diversity, excellence, and
            equality demand accelerated action to end racial injustice
            everywhere, and we know that we must start with ourselves. Read our
            commitments to Equity & Inclusion.
          </p>
        </div>
      </div>
      <div className="about__view">
        <div className="about__left__view sd">
          <h2 className="df">leadership</h2>
          <p className="df__para">
            CARE USA is dedicated to ending poverty and improving the lives of
            women, girls, and vulnerable populations around the world. Our core
            values of transformation, integrity, diversity, excellence, and
            equality demand accelerated action to end racial injustice
            everywhere, and we know that we must start with ourselves. Read our
            commitments to Equity & Inclusion.
          </p>
        </div>
        <div className="about__right__view">
          <img
            src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1370&q=80"
            alt=""
          />
        </div>
      </div>
      <Maingooter />
      <Subfooter />
    </div>
  );
};

export default About;
