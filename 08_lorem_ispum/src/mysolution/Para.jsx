import React, { useState } from "react";
import data from "../data";

function Para() {
  const [paradata, setParadata] = useState([]);
  const [count, setCount] = useState(0);

  function GeneratePara() {
    const num = Math.max(1, Math.min(count, data.length)); // Ensure input is within valid range
    setParadata(data.slice(0, num)); // Slice the array to get the specified number of paragraphs
  }

  return (
    <>
      <div>
        <label>
          Enter the number of paragraphs:
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            min="1"
            max={data.length}
          />
        </label>
        <button className="btn border bg-blue-400" onClick={GeneratePara}>
          Generate
        </button>
      </div>

      <div>
        {paradata.map((para, idx) => (
          <p key={idx}>{para}</p> // Render each paragraph
        ))}
      </div>
    </>
  );
}

export default Para;
