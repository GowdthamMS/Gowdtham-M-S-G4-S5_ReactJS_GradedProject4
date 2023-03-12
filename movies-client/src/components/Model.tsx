import IMovieDetail from "../models/IMovieDetail";

const Model = ({title, posterurl, storyline}:IMovieDetail) => {
    return (<>
    
    <div className="model-window">
    <div>
      <h1>{title}</h1>
      <img className="img" src={posterurl} alt="movie item" />
      <br/>
      <h2>Story Line</h2>
      <button className="ellipsis" onClick={() => {}}></button>
      <p className="ellipsis">{storyline}</p>
    </div>
  </div>
    </>);
}

export default Model;