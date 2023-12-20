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
          </center>

          <div className="planTextWrap">
           {showPlan? <div className="planTextGrid">
              <div>
                <p>Monthly price</p>
              </div>
              <div>
                <p> $7.99/mo. </p>
              </div>
              <div>
                <p>$14.99/mo. </p>
              </div>
              <div>
                <p>Streaming Library with tons of TV episodes and movies </p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>- </p>
              </div>

              <div>
                <p>Most new episodes the day after they air†</p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>- </p>
              </div>
              <div>
                <p>Access to award-winning Hulu Originals </p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>- </p>
              </div>

              <div>
                <p>
                  Watch on your favorite devices, including TV, laptop, phone,
                  or tablet{" "}
                </p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>- </p>
              </div>

              <div>
                <p>Up to 6 user profiles </p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>- </p>
              </div>

              <div>
                <p>Watch on 2 different screens at the same time </p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>- </p>
              </div>

              <div>
                <p>No ads in streaming library </p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>- </p>
              </div>

              <div>
                <p>Download and Watch </p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>- </p>
              </div>

              <div>
                <p>
                  †For current-season shows in the streaming library only
                  **Switches from Live TV to Hulu take effect as of the next
                  billing cycle
                </p>
              </div>
            </div>:<div className="planTextGrid2">
              <div>
                <p>Monthly price. Save up to $15.98/mo.*</p>
              </div>
              <div>
                <p> $25.97/mo. $12.99/mo.* </p>
              </div>
              <div>
                <p>$35.97/mo. $19.99/mo.* </p>
              </div>
              <div>
                <p>$69.99/mo.</p>
              </div>
              <div>
                <p>Subscriptions included in each plan</p>
              </div>
              <div>
                <p>Disney+, Hulu, and ESPN+, all with ads </p>
              </div>

              <div>
                <p>Disney+ (No Ads), Hulu (No Ads), ESPN+ (With Ads)</p>
              </div>
              <div>
                <p>Hulu + Live TV, Disney+, and ESPN+, all with ads</p>
              </div>

              <div>
                <p>Hulu Streaming library with tons of episodes and Movies</p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>-</p>
              </div>

              <div>
                <p>Most new episodes the day after they air† </p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>-</p>
              </div>

              <div>
                <p>Access to award-winning Hulu Originals</p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>-</p>
              </div>

              <div>
                <p>
                  {" "}
                  Watch on your favorite devices, including TV, laptop, phone,
                  or tablet
                </p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>-</p>
              </div>

              <div>
                <p> Download and watch on Hulu</p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>-</p>
              </div>

              <div>
                <p> Live TV with 85+ top channels. No cable required.</p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>-</p>
              </div>

              <div>
                <p> Live TV guide to navigate channels</p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>-</p>
              </div>

              <div>
                <p>
                  {" "}
                  Record Live TV with Unlimited DVRRecord Live TV with Unlimited
                  DVR{" "}
                </p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>-</p>
              </div>
              <div>
                <p>-</p>
              </div>

              <div>
                <p>
                  *Savings compared to regular monthly price of each service.
                  Terms apply. **Switches from Live TV to Hulu take effect as of
                  the next billing cycle †For current-season shows in the
                  streaming library only
                </p>
              </div>
            </div>}

            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
