import "./App.css";
import movies from "./data/movies.jsx"
import {MoviesBox} from "./data/movies.jsx"

function App() {
  return (
    <div className="App">
      <h1>
        Movie List Section
      </h1>
      <section className="movie-list-section">
        {movies.map(MoviesBox)}
      </section>
    </div>
  );
}

export default App;
