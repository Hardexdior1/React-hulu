import React, { useRef, useState } from "react";
import "../Styles/Plans.css";
import hulu from "../images/disnep2.png";
import checked from "../images/Pricing_Checkmark_green-light (1).svg";
const Plans = () => {
  const float = useRef();
  const toggle = useRef();
  const click = () => {
    if (
      float.current.classList.contains("inner-circle") &&
      toggle.current.classList.contains("toggle")
    ) {
      float.current.classList.remove("inner-circle");
      float.current.classList.add("inner-circle2");

      toggle.current.classList.remove("toggle");
      toggle.current.classList.add("toggle2");
    } else if (
      float.current.classList.contains("inner-circle2") &&
      toggle.current.classList.contains("toggle2")
    ) {
      float.current.classList.add("inner-circle");
      float.current.classList.remove("inner-circle2");

      toggle.current.classList.add("toggle");
      toggle.current.classList.remove("toggle2");
    }
  };
  const [showPlan, setShowPlan] = useState(true);

  const plans = [
    {
      name: "Monthly price. Save up to $17.98/mo.*",
    },
    {
      name: "Subscriptions included in each plan",
    },
    {
      name: "Hulu Streaming library with tons of episodes and movies",
    },
    {
      name: "Monthly price. Save up to $17.98/mo.*",
    },
    {
      name: "Subscriptions included in each plan",
    },
    {
      name: "Hulu Streaming library with tons of episodes and movies",
    },
    {
      name: "Monthly price. Save up to $17.98/mo.*",
    },
    {
      name: "Subscriptions included in each plan",
    },
    {
      name: "Hulu Streaming library with tons of episodes and movies",
    },
  ];
  const plans2 = [
    {
      name: "Monthly price",
    },
    {
      name: "Streaming Library with tons of TV episodes and movies",
    },
    {
      name: "Most new episodes the day after they air†",
    },
    {
      name: "Access to award-winning Hulu Originals.*",
    },
    {
      name: "Watch on your favorite devices, including TV, laptop, phone, or tablet",
    },
    {
      name: "Up to 6 user profilesUp to 6 user profiles",
    },
    {
      name: "Watch on 2 different screens at the same time*",
    },
    {
      name: "Subscriptions included in each plan",
    },
    {
      name: "Hulu Streaming library with tons of episodes and movies",
    },
  ];
  return (
    <div>
      <section className="SelectPlanWrap">
        <center className="mb-8 md:mb-0">
          <h1>Select Your Plan</h1>
          <p className="mb-3">
            No hidden fees, equipment rentals, or installation appointments.
          </p>
          <p className="anytimeBorder">
            <b>Switch plans or cancel anytime.** </b>
          </p>
        </center>

        <div className="">
          <div>
            <div className="wrap2">
              <div>
                <h2>BASE PLANS </h2>
                <h4>HULU</h4>
              </div>

              <div
                className="toggle"
                ref={toggle}
                onClick={() => {
                  click();
                  setShowPlan(!showPlan);
                }}>
                <div className="inner-circle" ref={float}></div>
              </div>

              <div>
                <h2>BUNDLE / SAVE</h2>
                <div>
                  {" "}
                  <img className="huluLogo" src={hulu} alt="hulu-logo" />{" "}
                </div>
              </div>
            </div>

            {/* plans section */}
            {showPlan?<div className="grid gap-6 text-white font-semibold mt-8">
              {plans.map((item, index) => {
                return <p key={index} className="border-b border-gray-400 pb-2">{item.name}</p>;
              })}
            </div>:<div className="grid gap-6 text-white font-semibold mt-8">
              {plans2.map((item, index) => {
                return <p key={index} className="border-b border-gray-400 pb-2">{item.name}</p>;
              })}
            </div>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
