import React from "react";
import Reviews from "./component/Reviews";



function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h4>Our Reviews</h4>
          <div className="underline"></div>
        </div>
        <Reviews/>

      </section>
    </main>
  );
}

export default App;
