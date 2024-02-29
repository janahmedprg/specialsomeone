// Heart.js

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import heartSvg from "../img/heart.svg";
import "../css/HeartStyles.css";

const Heart = () => {
  const initialSize = 70;
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  const [size, setSize] = useState(initialSize);

  const increment = 30;

  const increaseHeartSize = () => {
    setSize((prevSize) => (prevSize > 1300 ? prevSize : prevSize + increment));
  };

  useEffect(() => {
    let decreaseTimeout;
    if (size >= 500) {
      setRedirect(true);
    } else {
      setRedirect(false);
    }
    decreaseTimeout = setTimeout(() => {
      console.log(size);
      setSize((prevSize) =>
        prevSize > initialSize ? prevSize - 2 * increment : initialSize
      );
    }, 300);
    return () => clearTimeout(decreaseTimeout);
  }, [size]);

  const redirectToPage = () => {
    if (redirect) {
      navigate("password");
    }
  };

  return (
    <div className="heart-wrap">
      <img
        src={heartSvg}
        className="heart-pic"
        alt="Heart"
        style={{
          width: size + "px",
          height: size + "px",
          cursor: "pointer",
        }}
        onClick={() => {
          increaseHeartSize();
        }}
      />
      {redirect && (
        <button className="button-red" onClick={redirectToPage}>
          Enter
        </button>
      )}
    </div>
  );
};

export default Heart;
