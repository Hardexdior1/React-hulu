import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";
const Footer = () => {
  const [browse, setBrowse] = useState(false);
  const [help, setHelp] = useState(false);
  const [about, setAbout] = useState(false);

  return (
    <div>
      <footer id="footer">
        <div class="subDiv">
          <div>
            <h3>BROWSE</h3>
            <li>
              <a href="#">Streaming Library </a>
            </li>
            <li>
              <a href="#">Live TV </a>
            </li>
            <li>
              <a href="#">Live News </a>
            </li>
            <li>
              <a href="#">Live Sports </a>
            </li>
          </div>

          <div class="MinusMargin">
            <div>
              <li>
                <a href="#">TV Shows</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">Originals </a>
              </li>
              <li>
                <a href="#">Networks </a>
              </li>
              <li>
                <a href="#">kids </a>
              </li>
              <li>
                <a href="#">FX</a>
              </li>
            </div>

            <div>
              <li>
                <a href="#">
                  HBDO Max <sup>TM</sup>
                </a>
              </li>
              <li>
                <a href="#">CinemaX</a>
              </li>
              <li>
                <a href="#">Showtime </a>
              </li>
              <li>
                <a href="#">STARZ </a>
              </li>
            </div>
            <div>
              <li>
                <a href="#">Disney Bundle Trio Basic</a>
              </li>
              <li>
                <a href="#">Disney Bundle Premium</a>
              </li>
              <li>
                <a href="#">Disney Bundle Duo Basic</a>
              </li>
              <li>
                <a href="#">Student Discount </a>
              </li>
            </div>
          </div>
        </div>
        <div>
          <h3>HELP</h3>
          <li>
            <a href="#">Account & Billing</a>
          </li>
          <li>
            <a href="#">Plans & Pricing </a>
          </li>
          <li>
            <a href="#">Supported Devices </a>
          </li>
          <li>
            <a href="#">Accessibility </a>
          </li>
        </div>
        <div>
          <h3>ABOUT US</h3>
          <li>
            <a href="#">Shop Hulu</a>
          </li>
          <li>
            <a href="#">Press </a>
          </li>
          <li>
            <a href="#">Job </a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </div>
      </footer>

      <div className="footer2">
        <div className="footerBorder">
          <div className="flexShowLinks">
            <h3>BROWSE</h3>

            {browse ? (
              <button
                onClick={() => {
                  setBrowse(!browse);
                }}>
                v
              </button>
            ) : (
              <button
                onClick={() => {
                  setBrowse(!browse);
                }}>
                ^
              </button>
            )}
          </div>

          {browse ? (
            <div className="linksCarrier">
              <div>
                <li>
                  <a href="#">Streaming Library </a>
                </li>
                <li>
                  <a href="#">Live TV </a>
                </li>
                <li>
                  <a href="#">Live News </a>
                </li>
                <li>
                  <a href="#">Live Sports </a>
                </li>
              </div>

              <div>
                <li>
                  <a href="#">TV Shows</a>
                </li>
                <li>
                  <a href="#">Movies</a>
                </li>
                <li>
                  <a href="#">Originals </a>
                </li>
                <li>
                  <a href="#">Networks </a>
                </li>
                <li>
                  <a href="#">kids </a>
                </li>
                <li>
                  <a href="#">FX</a>
                </li>
              </div>

              <div>
                <li>
                  <a href="#">
                    HBDO Max <sup>TM</sup>
                  </a>
                </li>
                <li>
                  <a href="#">CinemaX</a>
                </li>
                <li>
                  <a href="#">Showtime </a>
                </li>
                <li>
                  <a href="#">STARZ </a>
                </li>
              </div>
              <div>
                <li>
                  <a href="#">Disney Bundle Trio Basic</a>
                </li>
                <li>
                  <a href="#">Disney Bundle Premium</a>
                </li>
                <li>
                  <a href="#">Disney Bundle Duo Basic</a>
                </li>
                <li>
                  <a href="#">Student Discount </a>
                </li>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="footerBorder">
          <div className="flexShowLinks">
            <h3>HELP</h3>

            {help ? (
              <button
                onClick={() => {
                  setHelp(!help);
                }}>
                v
              </button>
            ) : (
              <button
                onClick={() => {
                  setHelp(!help);
                }}>
                ^
              </button>
            )}
          </div>

          {help ? (
            <div className="linksCarrier">
              <div>
                <li>
                  <a href="#">Account & Billing</a>
                </li>
                <li>
                  <a href="#">Plans & Pricing </a>
                </li>
                <li>
                  <a href="#">Supported Devices </a>
                </li>
                <li>
                  <a href="#">Accessibility </a>
                </li>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="footerBorder">
          <div className="flexShowLinks">
            <h3>ABOUT US</h3>

            {about ? (
              <button
                onClick={() => {
                  setAbout(!about);
                }}>
                v
              </button>
            ) : (
              <button
                onClick={() => {
                  setAbout(!about);
                }}>
                ^
              </button>
            )}
          </div>

          {about ? (
            <div className="linksCarrier">
              <div>
                <li>
                  <a href="#">Shop Hulu</a>
                </li>
                <li>
                  <a href="#">Press </a>
                </li>
                <li>
                  <a href="#">Job </a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
