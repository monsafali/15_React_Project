import React, { useState } from "react";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>

      <section className="colors">
        <h4>List goes here</h4>
      </section>
    </>
  );
}

export default App;
