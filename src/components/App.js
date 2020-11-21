import React, { Component, useState } from "react";
import "../styles/App.css";
import slides from "../data";
import Slides from "./slides";

const App = () => {
  const [slideNo, setSlideNo] = useState(0);

  const handlePrevious = () => {
    let currentSlideNo = slideNo;
    currentSlideNo--;
    setSlideNo(currentSlideNo);
  };

  const handleNext = () => {
    let currentSlideNo = slideNo;
    currentSlideNo++;
    setSlideNo(currentSlideNo);
  };

  const handleRestart = () => {
    setSlideNo(0);
  };

  return (
    <>
      <Slides title={slides[slideNo].title} text={slides[slideNo].text} />
      <button
        data-testid="button-prev"
        disabled={slideNo === 0}
        onClick={handlePrevious}
      >
        Prev
      </button>
      <button
        data-testid="button-restart"
        disabled={slideNo === 0}
        onClick={handleRestart}
      >
        Restart
      </button>
      <button
        data-testid="button-next"
        disabled={slideNo === slides.length - 1}
        onClick={handleNext}
      >
        Next
      </button>
    </>
  );
};

export default App;
