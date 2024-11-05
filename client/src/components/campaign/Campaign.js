import "./campaign.css";

const Campaign = () => {
  return (
    <div className="campaign__container">
      <h2 className="campaign__title">Ongoing Campaigns</h2>
      <h2 className="campaign__sub__title">
        fight against poverty to succeed in life
      </h2>

      <div className="campaign__section">
        <div className="campaign__card">
          <h2 className="campaign__session__title">sessions</h2>
          <p className="campaign__session__para">
            Invest Growth Capital towards building businesses
          </p>
          <button className="campaign__session__btn">see more</button>
        </div>
        <div className="campaign__card">
          <h2 className="campaign__session__title">Coaching</h2>
          <p className="campaign__session__para">
            Sponsor an SGB to receive high- level mentorship
          </p>
          <button className="campaign__session__btn">see more</button>
        </div>
        <div className="campaign__card">
          <h2 className="campaign__session__title">Community</h2>
          <p className="campaign__session__para">
            Support an entrepreneur to attend professional workshop
          </p>
          <button className="campaign__session__btn">see more</button>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
