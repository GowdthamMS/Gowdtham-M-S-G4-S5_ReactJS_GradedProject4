import IMovieDetail from "../models/IMovieDetail";

const Modal = ({title, posterurl, storyline, closeModal}:IMovieDetail) => {
    return (<>
    
    <div className="modal-window">
    <div>
      <a href="#" title="Close" className="modal-close" onClick={()=>{closeModal()}}>Close</a>
      <h1>{title}</h1>
      <img className="img" src={posterurl} alt="movie item" />
      <br/>
      <h2>Story Line</h2>
      <p className="ellipsis">{storyline}</p>
    </div>
  </div>
    
    </>);
}

export default Modal;