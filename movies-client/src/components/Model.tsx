import IMovieDetail from "../models/IMovieDetail";

const Model = ({title, posterurl, storyline, closeModel, imdbRating, contentRating, duration, genres, actors, releaseDate}:IMovieDetail) => {
    return (<>
    
    <div className="model-window">
    <div>
    <a href="#" title="Close" className="modal-close" onClick={()=>{closeModel()}}>Close</a>
      <h1>{title}</h1>
      <img className="img" src={posterurl} alt="movie item" />
      <h2>IMDB Rating : </h2>
      <p className="imdbrating">{imdbRating}</p>
      <h2>Story Line : </h2>
      <p className="storyline">{storyline}</p>
      <h2>Content Rating : </h2>
      <p className="contentrating">{contentRating}</p>
      <h2>Duration : </h2>
      <p className="duration">{duration}</p>
      <h2>Genres : </h2>
      <p className="genres">{genres}</p>
      <h2>Cast : </h2>
      <p className="actors">{actors}</p>
      <h2>Release Date : </h2>
      <p className="releasedate">{releaseDate}</p>
    </div>
  </div>
    </>);
}

export default Model;