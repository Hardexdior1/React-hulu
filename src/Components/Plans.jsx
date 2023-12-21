import React, { useRef, useState } from "react";
import "../Styles/Plans.css";

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
  return (
    <div>
      <section className="SelectPlanWrap">
        <center>
          <h1>Select Your Plan</h1>
          <p>
            No hidden fees, equipment rentals, or installation appointments.
          </p>
          <p className="anytimeBorder">
            <b>Switch plans or cancel anytime.** </b>
          </p>
        </center>

        <div>
          <center>
            <div className="BasePlanAndMostPopularFlexDiv">
              <div className="bestPlansWrap">
                <div>
                  <h5>BASE PLANS</h5>
                  <h6>HULU</h6>
                </div>

                <div>
                  <div
                    className="toggle"
                    ref={toggle}
                    onClick={() => {
                      click();
                      setShowPlan(!showPlan);
                    }}>
                    <div className="inner-circle" ref={float}></div>
                  </div>
                </div>
                <div>
                  <h5>BUNDLE / SAVE</h5>
                  <h6>HULU</h6>
                </div>
              </div>

              {showPlan ? (
                <div className="mostPoPuLarWrap1">
                  <div>
                    <button>MOST POPULAR</button>
                    <h3>30 DAY FREE TRIAL</h3>
                    <h4>HULU (With Adds)</h4>

                    <button className="pricePerMonth">$7.99 / MONTH</button>
                  </div>

                  <div>
                    <button>MOST POPULAR</button>
                    <h3>30 DAY FREE TRIAL</h3>
                    <h4>HULU (No Adds)</h4>

                    <button className="pricePerMonth">$14.99 / MONTH</button>
                  </div>
                </div>
              ) : (
                <div className="mostPoPuLarWrap mostPoPuLarWrap2">
                  <div>
                    <button>MOST POPULAR</button>

                    <h2>Disney Bundle</h2>
                    <h5>Trio Basic</h5>

                    <button className="pricePerMonth">$12.99 / MONTH</button>
                  </div>

                  <div>
                    <button>MOST POPULAR</button>
                    <h2>Disney Bundle</h2>
                    <h5>Trio Premium</h5>

                    <button className="pricePerMonth">$12.99 / MONTH</button>
                  </div>

                  <div>
                    <button>MOST POPULAR</button>
                    <h2>Disney Bundle</h2>
                    <h5>Hulu + Live TV</h5>

                    <button className="pricePerMonth">$12.99 / MONTH</button>
                  </div>
                </div>
              )}
            </div>

            <div className="subScribeTex">
          <h1>hello</h1>
          <h1>hello</h1>

        </div>
          </center>

       
        </div>
      </section>
    </div>
  );
};

export default Plans;
