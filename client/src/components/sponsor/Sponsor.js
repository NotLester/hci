import React, { useState } from "react";
import Combinenav from "../Nav/Combinednav/Combinenav";
import Maingooter from "../footer/Mainfooter/Maingooter";
import Subfooter from "../footer/Subfooter/Subfooter";
import { BiTimeFive } from "react-icons/bi";
import "./sponse.css";
import sponse from "./sponse";
import { loadStripe } from "@stripe/stripe-js";
import { BiDonateHeart } from "react-icons/bi";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51MzKGEBO6rili9bgRYSWgL8MBvkplg31K5x94ElIrYX4TPJ8IemgPpKq46zf5rL81TwJoMQOn30lDTJYrSISU1Xn009D8UXZ49"
    );
  }

  return stripePromise;
};
const Sponsor = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1MzMsXBO6rili9bgysRRayIK",
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);
  return (
    <div>
      <Combinenav />

      <div className="sponsor__container">
        {sponse.map((sp) => {
          return (
            <>
              <div className="sponsor__card">
                <div className="min">
                  <img src={sp.img} alt="" className="sponsor__img" />
                  <h2 className="person">{sp.person}</h2>
                  <div className="gh">
                    <BiTimeFive />
                    <p className="desc">{sp.time}</p>
                  </div>
                  <p className="desc">{sp.desc}</p>
                  <button
                    className="checkout-button"
                    onClick={redirectToCheckout}
                    disabled={isLoading}
                  >
                    <div className="text-container">
                      <p className="text">
                        {isLoading ? "Loading..." : " Donate"}
                        <BiDonateHeart className="tyr" />
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Maingooter />
      <Subfooter />
    </div>
  );
};

export default Sponsor;
