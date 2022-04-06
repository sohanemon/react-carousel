import React, { useState } from "react";
import "./carousel.css";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
const Carousel = ({ data }) => {
  const [Current, setCurrent] = useState(0);
  const length = data.length;
  if (!Array.isArray(data) || data.length <= 0) return null;
  const next = () => {
    setCurrent(Current === length - 1 ? 0 : Current + 1);
    console.log(Current);
  };
  const prev = () => {
    setCurrent(Current === 0 ? length - 1 : Current - 1);
    console.log(Current);
  };
  return (
    <div className="slider">
      <FaAngleDoubleLeft className="larrow" onClick={prev} />
      <FaAngleDoubleRight className="rarrow" onClick={next} />
      {data.map((e, i) => (
        <div className={i === Current ? "slide active" : "slide"} key={i}>
          {i === Current && <img src={e.image} className="image" alt="" />}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
