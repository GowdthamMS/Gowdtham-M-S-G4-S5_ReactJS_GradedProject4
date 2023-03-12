import IMovieDetail from "../models/IMovieDetail";

const Model = ({title, posterurl, storyline, closeModel}:IMovieDetail) => {
    return (<>
    
    <div className="model-window">
    <div>
      <a href="#" title="Close" className="model-close" onClick={()=>{closeModel()}}>Close</a>
      <h1>{title}</h1>
      <img className="img" src={posterurl} alt="movie item" />
      <br/>
      <h2>Story Line</h2>
      <p className="ellipsis">{storyline}</p>
    </div>
  </div>
    </>);
}

export default Model;