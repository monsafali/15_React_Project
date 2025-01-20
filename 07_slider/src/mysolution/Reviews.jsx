import React, { useState, useEffect, useRef } from "react";
import ReviewsData from "./data"; // Replace with your reviews data

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const isResetting = useRef(false); // Tracks whether the slider is resetting to avoid interruptions

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  const handleNextSlide = () => {
    if (isResetting.current) return; // Prevent actions during reset
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevSlide = () => {
    if (isResetting.current) return; // Prevent actions during reset
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ReviewsData.length - 1 : prevIndex - 1
    );
  };

  const handleTransitionEnd = () => {
    if (currentIndex === ReviewsData.length) {
      // Disable transition and reset to the first slide
      isResetting.current = true;
      sliderRef.current.style.transition = "none";
      setCurrentIndex(0);

      // Re-enable transition after resetting
      setTimeout(() => {
        sliderRef.current.style.transition = "transform 0.5s ease-in-out";
        isResetting.current = false;
      }, 50);
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      {/* Slider Content */}
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {/* Original Slides */}
        {ReviewsData.map((review, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 p-6 bg-white shadow-lg rounded-lg flex flex-col items-center"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-16 h-16 rounded-full mb-4 object-cover"
            />
            <h4 className="text-lg font-semibold">{review.name}</h4>
            <p className="mt-2 text-gray-600 text-center">{review.text}</p>
          </div>
        ))}

        {/* Cloned First Slide */}
        <div className="w-full flex-shrink-0 p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <img
            src={ReviewsData[0].image}
            alt={ReviewsData[0].name}
            className="w-16 h-16 rounded-full mb-4 object-cover"
          />
          <h4 className="text-lg font-semibold">{ReviewsData[0].name}</h4>
          <p className="mt-2 text-gray-600 text-center">
            {ReviewsData[0].text}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-full p-2 shadow-md"
      >
        &#10094;
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-full p-2 shadow-md"
      >
        &#10095;
      </button>
    </div>
  );
}

export default Reviews;




import Reviews from "./component/Reviews";

function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <section className="container text-center">
        <div className="mb-8">
          <h4 className="text-2xl font-bold">Our Reviews</h4>
          <div className="mt-2 w-16 h-1 bg-blue-500 mx-auto"></div>
        </div>
        <Reviews />
      </section>
    </main>
  );
}

export default App;
