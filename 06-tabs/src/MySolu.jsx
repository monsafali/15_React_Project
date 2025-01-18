import React, { useState, useEffect } from "react";

const url = "https://www.course-api.com/react-tabs-project";

function MySolu() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  // Fetch the data only once on component mount
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  // Handler to move to the next company
  const nextCompany = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length); // Cycle through companies
  };

  if (data.length === 0) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  const { title, dates, duties, company } = data[index];

  return (
    <div className="w-full border border-red-300">
      <h1 className="underline font-bold">Experience</h1>

      <div className="flex gap-32 mt-32 justify-between">
        <div className="flex flex-col gap-3">
          {/* Map through the company names */}
          {data.map((item, idx) => (
            <h2
              key={item.id}
              className={`cursor-pointer ${
                idx === index ? "text-blue-500 font-bold" : ""
              }`}
              onClick={() => setIndex(idx)}
            >
              {item.company}
            </h2>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h2>{title}</h2>
          <button className="flex justify-start" onClick={nextCompany}>
            {company}
          </button>
          <p>{dates}</p>
          <div>
            {duties.map((duty, idx) => (
              <p key={idx}>{duty}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySolu;
