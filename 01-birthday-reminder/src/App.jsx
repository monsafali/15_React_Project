import React, { useState } from "react";
import List from "./List";
// import MyPractiseList from "./MyPractiseList";
import data from "./data.js";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birdthay Today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>yoru click me</button>
      </section>
    </main>
  );
}

export default App;
