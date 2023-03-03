import IMovieItem from "./IMovieItem";

interface IMovieObj {
    "movies-coming": IMovieItem[],
    "movies-in-theaters": IMovieItem[],
    "top-rated-india":IMovieItem[],
    "top-rated-movies":IMovieItem[],
    "favourites":IMovieItem[]
}

export default IMovieObj;