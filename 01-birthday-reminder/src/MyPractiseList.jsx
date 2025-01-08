import React, { useState, useEffect } from "react";

function MyPractiseList() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getdata() {
      try {
        const response = await fetch("http://localhost:5000/data");
        const jsonData = await response.json();
        setData(jsonData); // Set the fetched data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getdata();
  }, []); // Empty dependency array ensures it runs only once on mount

  if (!data) {
    // Render a loading state while data is being fetched
    return <p>Loading...</p>;
  }

  const total = data.length; // Get the total length of the array

  const clearData = () => {
    setData(null); // Clear the data by setting state to null
  };

  return (
    <div className="bg-slate-200 w-96 mx-auto h-auto p-4">
      <p>{total} Birthday(s) Today</p>
      {data.map((item, index) => (
        <div key={index} className="flex justify-evenly mb-4">
          <img
            className="w-20 h-20 rounded-full"
            src={item.image}
            alt={`Birthday person ${index + 1}`}
          />
          <div>
            <h1>
              Name: <span className="font-bold">{item.name}</span>
            </h1>
            <p>Age: {item.age}</p>
          </div>
        </div>
      ))}
      <button
        className="bg-red-500 text-white py-2 px-4 rounded mt-4 hover:bg-red-700"
        onClick={clearData}
      >
        Clear All
      </button>
    </div>
  );
}

export default MyPractiseList;
