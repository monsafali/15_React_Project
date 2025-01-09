import React, { useState, useEffect } from "react";
import Loading from "./Component/Loading";
import Tours from "./Component/Tours";

// /react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const fetchTours = async () => {
    setLoading(true);

    try {
      const respone = await fetch(
        "https://www.course-api.com/react-tours-project"
      );
      const tours = await respone.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log("Error Eccured", error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchTours}>
            Referesh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
