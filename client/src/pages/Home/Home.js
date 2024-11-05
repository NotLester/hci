import React from "react";
import Campaign from "../../components/campaign/Campaign";
import Header from "../../components/Header/Header";
import Combinenav from "../../components/Nav/Combinednav/Combinenav";
import Maingooter from "../../components/footer/Mainfooter/Maingooter";
import Subfooter from "../../components/footer/Subfooter/Subfooter";

const Home = () => {
  return (
    <div>
      <Combinenav />
      <Header />
      <Campaign />
      <Maingooter />
      <Subfooter />
    </div>
  );
};

export default Home;
