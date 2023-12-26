import React, { useState, useRef } from "react";
import data1 from "../Datas/Datas1";
import "../Styles/Carousel1.css";
// import data2 from "../Datas/Datas2";

const Carousel1 = () => {
  const nex = useRef();
  const pre = useRef();
  // console.log(data2);
  const[showLength,setShowLength]=useState(true)
  const[dataLength,setDataLength]=useState(data1)
  const [count, setCount] = useState(0);
  console.log(count)
  const { img1, img2, img3, img4,Title1,Title2,Title3,Title4 } = data1[count];
  // Initialize with the first object from data1
  const translateValue = `translateX(-${count * 2}%)`;

  const[mobileData,setMobileData]=useState(data1.slice(0,2))
  console.log(mobileData);

  const showAllData=()=>{
    setMobileData(data1)
  }
  const next = () => {
    // ima

    // setCount(count===0)

    // else{
    //     setCount(count==0)
    // }
    if (count < 3) {
      setCount(count + 1);
      nex.current.classList.remove('hide')
      nex.current.classList.add('next')

      pre.current.classList.remove('prev')
      pre.current.classList.add('next')
    }
    if (count===2) {
        console.log('hello')
        nex.current.classList.remove('next')
        nex.current.classList.add('hide')

    }
  
  };
  const prev = () => {
  

      if(count>0){
        setCount(count - 1);
        nex.current.classList.remove('hide')
        nex.current.classList.add('next')
      }
      if(count==1){
   
        pre.current.classList.add('prev')
        pre.current.classList.remove('next')
      }
  
  };
  return (
 <div className="overAllMovieWrap">
    <h4>FEATURED TV</h4>
   <div>
   {mobileData.map((eachItem)=>{
      const{img1,img2,img3,img4}=eachItem
      return<div className="mobileImgWrap">
        <div><img src={img1} alt="img" />
        <h2 >{Title1}</h2>
        </div>

        <div><img src={img2} alt="img" />
        <h2>{Title2}</h2>
        </div>
        <div><img src={img3} alt="img" /></div>
        <div><img src={img4} alt="img" /></div>

      </div>
    })}

   {showLength? <button className="seeAll" onClick={()=>{
      showAllData()
      setShowLength(false)
    }}>Show more ({dataLength.length*2})</button>:''}
   </div>
       <div className="movieWrap">
      <button className="prev" ref={pre} onClick={()=>{
        prev()
      }}>{"<"} </button>
      <div className="image1Wrap" style={{translate:translateValue}}>
        <div>
          <img src={img1} alt="movie-img" />
        </div>
        <div>
          <img src={img2} alt="movie-img" />
        </div>
        <div>
          <img src={img3} alt="movie-img" />
        </div>
        <div>
          <img src={img4} alt="movie-img" />
        </div>
      </div>
      <button
        className="next"
        ref={nex}
        onClick={() => {
          next();
        }}>
        {">"}{" "}
      </button>
    </div>
 </div>
  );
};

export default Carousel1;
