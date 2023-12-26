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

        <div className="flexPlan">
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

            {showPlan?<div className="planTextGrid">
              <p> Monthly price</p>
              <p>Streaming Library with tons of TV episodes and movies</p>

              <p>Most new episodes the day after they air†</p>
              <p>Access to award-winning Hulu Originals</p>
              <p>
                Watch on your favorite devices, including TV, laptop, phone, or
                tablet
              </p>
              <p>Up to 6 user profilesUp to 6 user profiles</p>
              <p>Watch on 2 different screens at the same time</p>
              <p>No ads in streaming libraryNo ads in streaming library</p>
              <p>Download and watchDownload and watch</p>

              <p>
                <small>
                  †For current-season shows in the streaming library only
                  **Switches from Live TV to Hulu take effect as of the next
                  billing cycle
                </small>
              </p>
            </div>:<div className="planTextGrid">
              <p> Monthly price. Save up to $17.98/mo.*</p>
              <p>Subscriptions included in each plan</p>

              <p>Hulu Streaming library with tons of episodes and movies</p>
              <p>Endless entertainment with Disney+</p>
              <p>
                Live sports with ESPN+, now in the Hulu appLive sports with
                ESPN+, now in the Hulu app
              </p>
              <p>Most new episodes on Hulu the day after they air†</p>
              <p>Access to award-winning Hulu Originals</p>
              <p>
                Watch on your favorite devices, including TV, laptop, phone, or
                tablet
              </p>
              <p>Download and watch on HuluDownload and watch on Hulu</p>

              <p>No ads in Hulu streaming library</p>

              <p>No ads on Disney+</p>
              <p>Live TV on Hulu with 90+ top channels. No cable required.</p>

              <p>Live TV guide to navigate channels</p>
              <p>
                Record Live TV with Unlimited DVRRecord Live TV with Unlimited
                DVR
              </p>

              <p>
                <small>
                  *Savings compared to regular monthly price of each service.
                  Terms apply. **Switches from Live TV to Hulu take effect as of
                  the next billing cycle †For current-season shows in the
                  streaming library only
                </small>
              </p>
            </div>}
            
          </div>

          <div className="hide2">
           {showPlan?<div> <div className="popularWrap">
              <button className="mostPopular">MOST POPULAR</button>
              <h4>30 DAY FREE TRIAL</h4>
              <h3>Hulu (With Ads)</h3>

              <button className="price">$7.99 / MONTH </button>
            </div>

            <div className=" planTextGrid2">
              <p> $7.99/mo.</p>
              <div>
                <img src={checked} alt="checked-icon" />
              </div>

              <div>
                <img src={checked} alt="checked-icon" />
              </div>
              <div>
                <img src={checked} alt="checked-icon" />
              </div>
              <div>
                <img src={checked} alt="checked-icon" />
              </div>
              <div>
                <img src={checked} alt="checked-icon" />
              </div>
              <div>
                <img src={checked} alt="checked-icon" />
              </div>
              <p>-</p>
              <p>-</p>
            </div></div>: 
            
            <div>
              <div className="popularWrap">
                <img className="hulu-logo" src={hulu} alt="hulu-logo" />
                
                <h4>Disney Bundle Trio Basic</h4>

                <button className="price">$14.99 / MONTH </button>
              </div>

              <div className=" planTextGrid2">
                <p> $7.99/mo.</p>
                <p>$26.97/mo. $14.99/mo.*</p>

                <p>Disney+, Hulu, and ESPN+, all with ads</p>
                <div>
                  <img src={checked} alt="checked-icon" />
                </div>
                <div>
                  <img src={checked} alt="checked-icon" />
                </div>
                <div>
                  <img src={checked} alt="checked-icon" />
                </div>
                <div>
                  <img src={checked} alt="checked-icon" />
                </div>
                <div>
                  <img src={checked} alt="checked-icon" />
                </div>
                <div>
                  <img src={checked} alt="checked-icon" />
                </div>
                <p>-</p>
                <p>-</p>
                <p>-</p>
                <p>-</p>
                <p>-</p>
                <p>-</p>
              </div>
            </div>}

           
          </div>

          <div className="hide2">
            {showPlan?<div>
              <div className="popularWrap">
                <button className="mostPopular">MOST POPULAR</button>
                <h4>30 DAY FREE TRIAL</h4>
                <h3>Hulu (No Ads)</h3>

                <button className="price">$17.99 / MONTH </button>
              </div>

              <div className="planTextGrid2">
                <p> $7.99/mo.</p>
                <div>
                  <img src={checked} alt="checked-icon" />
                </div>

                <div>
                  <img src={checked} alt="checked-icon" />
                </div>
                <div>
                  <img src={checked} alt="checked-icon" />
                </div>
                <div>
                  <img src={checked} alt="checked-icon" />
                </div>
                <div>
                  <img src={checked} alt="checked-icon" />
                </div>
                <div>
                  <img src={checked} alt="checked-icon" />
                </div>
                <div>
                  <img src={checked} alt="checked-icon" />
                </div>
                <div>
                  <img src={checked} alt="checked-icon" />
                </div>
              </div>
            </div>: <div>
              <div className="popularWrap">
                <img className="hulu-logo" src={hulu} alt="hulu-logo" />
                
                <h4>Disney Bundle Trio Premium</h4>

                <button className="price">$24.99 / MONTH </button>
              </div>

              <div className=" planTextGrid2">
                <p> $42.97/mo.</p>
                <p>$24.99/mo.*</p>

                <p>Disney+ (No Ads), Hulu (No Ads), ESPN+ (With Ads)</p>
                <div>
                  <img src={checked} alt="checked-icon" />
                </div>
                <div>
                  <img src={checked} alt="checked-icon" />
                </div>
                <div>
                  <img src={checked} alt="checked-icon" />
                </div>
                <div>
                  <img src={checked} alt="checked-icon" />
                </div>
                <div>
                  <img src={checked} alt="checked-icon" />
                </div>
                <div>
                  <img src={checked} alt="checked-icon" />
                </div>
                <div>
                  <img src={checked} alt="checked-icon" />
                </div>
                <p>-</p>
                <p>-</p>
                <p>-</p>
                <p>-</p>
                <p>-</p>
              </div>
            </div>}
           
            
          </div>
        </div>
        {/* <p>hardex</p> */}
      </section>
    </div>
  );
};

export default Plans;
