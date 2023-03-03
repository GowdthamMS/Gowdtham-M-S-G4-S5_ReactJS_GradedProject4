// import { useEffect } from "react";
import { useEffect, useState } from "react";
import IMovieItem from "../models/IMovieItem";
import { IoHeartOutline, IoHeart, IoStar } from "react-icons/io5";

const MovieCard = ({id, title, posterurl, averageRating, liked, onToggleHeart, storyline, onToggleModal}:IMovieItem) => {

  const [faved, setFaved] = useState(liked);
  

  useEffect(()=>{
    console.log('liked', liked)
  })

  const changeHeart = () => {
    setFaved(faved?false:true);
  }


  return (
    <div className={"movie-card"}>
      <img className="img" src={posterurl} alt="movie item" onClick={()=>{onToggleModal(id)}} />
      <h4 className="title">{title}</h4>
      <div className="rateAndLike">
        <div className="rate">
          <IoStar className="star" />
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
