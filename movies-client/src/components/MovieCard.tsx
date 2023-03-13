  // import { useEffect } from "react";
  import { useEffect, useState } from "react";
  import { IoHeartOutline, IoHeart, IoStar } from "react-icons/io5";
  import IMovieItem from "../models/IMovieItem";

  const MovieCard = ({id, title, posterurl, averageRating, liked, onToggleHeart, onToggleModel}:IMovieItem) => {

    const [faved, setFaved] = useState(liked);
    
    useEffect(()=>{
      console.log('liked', liked)
    })

    const changeHeart = () => {
      setFaved(faved?false:true);
    }


    return (
      <div className={"movie-card"}>
        <img className="img" src={posterurl} alt="movie item" onClick={()=>{onToggleModel(id)}} />
        <h1 className="title">{title}</h1>
        <div className="rateAndLike">
          <div className="rate">
            <IoStar className="star"> </IoStar>
            <p className="rateNumber">{averageRating}</p>
          </div>
          <span className="liked" onClick={() => {onToggleHeart(id); changeHeart();}}>
            {faved ? <IoHeart color="red" /> : <IoHeartOutline />}
           </span>
          </div>
      </div>
    );
  };

export default MovieCard;
