import React, { useRef, useState } from 'react'
import NavBar from './NavBar'
import IncludedSection from './IncludedSection'
import Footer from './Footer'
import Plans from "./Plans";
import News from "./News";
import SubScriptions from './SubScriptions';


const LandingPage = ({}) => {

   
  return (
    <div>



{/* https://youtu.be/AVEqHRsCdAQ?si=6dnu6tgbll1fMsOw */}
<NavBar />
{/* <iframe
                  className="w-full md:h-screen"
                  src={`https://www.youtube.com/embed/1AunhJp931w`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  //   aria-controls=''
                ></iframe> */}
<IncludedSection />
<News />
<Plans />
{/* <SubScriptions /> */}
<Footer />
{/* <Link to='./Collections'>Collections</Link> */}
    </div>
  )
}

export default LandingPage