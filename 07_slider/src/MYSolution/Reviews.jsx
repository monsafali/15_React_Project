import React, { useState } from "react";
import reviews from "./data";

function Reviews() {
  const [next, setNext] = useState(0);

  // Handler for going to the next review
  const handleNext = () => {
    setNext((prevNext) => (prevNext + 1) % reviews.length);
  };

  // Handler for going to the previous review
  const handlePrevious = () => {
    setNext((prevNext) => (prevNext - 1 + reviews.length) % reviews.length);
  };

  // Handler for a random review
  const handleRandom = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * reviews.length);
    } while (randomIndex === next); // Ensure a different review is shown
    setNext(randomIndex);
  };

  return (
    <div className="w-[600px] text-center mx-auto justify-center flex flex-col items-center">
      <div>
        <img
          className="w-36 h-36 rounded-full"
          src={reviews[next].image}
          alt={reviews[next].name}
        />
        <h2>{reviews[next].name}</h2>
        <p>{reviews[next].job}</p>
        <p>{reviews[next].text}</p>
      </div>

      <div className="mt-4 flex gap-2">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
        <button onClick={handleRandom}>Random</button>
      </div>
    </div>
  );
}

export default Reviews;
