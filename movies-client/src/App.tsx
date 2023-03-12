import './App.css';
import Favourites from './components/Favourites';
import Home from './components/Home';
import NotFound from './components/NotFound';
import MoviesInTheaters from './components/MoviesInTheaters';
import TopRatedIndian from './components/TopRatedIndian';
import TopRatedMovies from './components/TopRatedMovies';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  

  return (
    <div className="App">
      <Router>
        {/* <Header search={search} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies-in-theaters" element={<MoviesInTheaters />} />
          <Route path="/top-rated-indian" element={<TopRatedIndian />} />
          <Route path="/top-rated-movies" element={<TopRatedMovies />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;