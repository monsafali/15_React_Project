import React, { useState, useEffect } from "react";

function Card() {
  const [data, setData] = useState([]);
  const [displayedCards, setDisplayedCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const api = await fetch(
          "https://www.course-api.com/react-tours-project"
        );
        const res = await api.json();
        setData(res);
        setDisplayedCards(res); // Initialize displayed cards
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Remove the last card
  const handleRemoveLastCard = () => {
    setDisplayedCards((prev) => prev.slice(0, -1));
  };

  // Refresh all cards
  const handleRefresh = () => {
    setDisplayedCards(data);
  };

  if (loading) {
    return (
      <div className="w-[600px] mx-auto text-center my-4">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-blue-500"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-[600px] mx-auto">
      {displayedCards.map((item) => (
        <div className="border border-black p-2 mb-2" key={item.id}>
          <div>
            <img src={item.image} alt={item.name} />
          </div>
          <div className="flex justify-between">
            <h2>{item.name}</h2>
            <h4>${item.price}</h4>
          </div>
          <div>
            <HiderText info={item.info} />
          </div>
        </div>
      ))}

      {displayedCards.length > 0 ? (
        <div className="text-center mt-4">
          <button
            onClick={handleRemoveLastCard}
            className="bg-red-500 text-white px-4 py-2"
          >
            Remove Last Card
          </button>
        </div>
      ) : (
        <div className="text-center mt-4">
          <button
            onClick={handleRefresh}
            className="bg-blue-500 text-white px-4 py-2"
          >
            Refresh
          </button>
        </div>
      )}
    </div>
  );
}

// HiderText Component
export function HiderText({ info }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const displayedText = isExpanded ? info : `${info.slice(0, 100)}...`;

  return (
    <div>
      <p>
        {displayedText}
        <button onClick={handleToggle} style={{ marginLeft: "8px" }}>
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </p>
    </div>
  );
}

export default Card;
