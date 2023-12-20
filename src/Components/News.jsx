import React, { useRef, useState } from "react";
import "../Styles/News.css";

const News = () => {
  const [live, setLive] = useState(true);

  const [breaking, setBreaking] = useState(false);

  const [biggest, setBiggest] = useState(false);

  const background = useRef();
  const liveText = useRef();
  const breakingText = useRef();
  const biggestText = useRef();

//  liveText.current.classList.add('newsChangeColor')
  const showBreaking = () => {
    setLive(false);
    setBreaking(true);
    setBiggest(false)
    background.current.classList.remove("NewsWrap");
    background.current.classList.add("NewsWrapSecond");
    liveText.current.classList.remove("newsChangeColor");
    breakingText.current.classList.add("newsChangeColor");
    biggestText.current.classList.remove("newsChangeColor");
    background.current.classList.remove("NewsWrapFourth");

  };

  const showLive = () => {
    setBreaking(false);
    setLive(true);
    setBiggest(false);
    background.current.classList.add("NewsWrap");
    background.current.classList.remove("NewsWrapSecond");
    background.current.classList.remove("NewsWrapFourth");

    liveText.current.classList.add("newsChangeColor");
    breakingText.current.classList.remove("newsChangeColor");
    biggestText.current.classList.remove("newsChangeColor");
  };
  const showBiggest = () => {
    setBreaking(false);
    setLive(false);
    setBiggest(true);
    background.current.classList.remove("NewsWrap");
    background.current.classList.remove("NewsWrapSecond");
    background.current.classList.add("NewsWrapFourth");

    liveText.current.classList.remove("newsChangeColor");
    breakingText.current.classList.remove("newsChangeColor");
    biggestText.current.classList.add("newsChangeColor");
  };
  return (
    <div>
      <section className="NewsWrap" ref={background}>
        <div className="overAllNewsWrap">
        <div className="newsChanger">
          <h5
            className="newsChangeColor"
            ref={liveText}
            onClick={() => {
              showLive();
            }}>
            LIVE SPORTS{" "}
          </h5>
          <h5
            ref={breakingText}
            onClick={() => {
              showBreaking();
            }}>
            BREAKING NEWS{" "}
          </h5>
          <h5
            ref={biggestText}
            onClick={() => {
              showBiggest();
            }}>
            BIGGEST EVENTS{" "}
          </h5>
        </div>

        {live ? (
          <div className="newsText">
            <h2>Live Sports </h2>
            <p>Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more. Includes top local and national sports networks like ABC, CBS Sports Network, ESPN, FOX, FS1, TNT, NFL Network and more.</p>
          </div>
        ) : (
          ""
        )}
        {breaking ? (
          <div className="newsText">
            <h2>Breaking News </h2>
           <p>Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.</p>
          </div>
        ) : (
          ""
        )}
        {biggest ? (
          <div className="newsText">
            <h2>Biggest Events </h2>
      <p>Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.</p>
          </div>
        ) : (
          ""
        )}
        </div>
      </section>
    </div>
  );
};

export default News;
