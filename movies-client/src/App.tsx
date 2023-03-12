import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

import Favourites from './components/Favourites';
import Home from './components/Home';
import NotFound from './components/NotFound';
import MoviesInTheaters from './components/MoviesInTheaters';
import TopRatedIndian from './components/TopRatedIndian';
import TopRatedMovies from './components/TopRatedMovies';

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
      <Outlet />
    </div>
  );
}

export default App;
