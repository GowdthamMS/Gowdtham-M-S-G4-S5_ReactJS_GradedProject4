import IMovieDetail from "../models/IMovieDetail";

const Model = ({title, posterurl, storyline, closeModel, ImdbRating, ContentRating, Duration, Genres, Actors, ReleaseDate}:IMovieDetail) => {
    return (<>
    
    <div className="model-window">
    <div>
    <a href="#" title="Close" className="modal-close" onClick={()=>{closeModel()}}>Close</a>
      <h1>{title}</h1>
      <img className="img" src={posterurl} alt="movie item" />
      <h2>Story Line</h2>
      <p className="storyline">{storyline}</p>
      <p className="imdbrating">{ImdbRating}</p>
      <p className="contentrating">{ContentRating}</p>
      <p className="duration">{Duration}</p>
      <p className="genres">{Genres}</p>
      <p className="actors">{Actors}</p>
      <p className="releasedate">{ReleaseDate}</p>
    </div>
  </div>
    </>);
}

export default Model;