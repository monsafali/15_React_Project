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
