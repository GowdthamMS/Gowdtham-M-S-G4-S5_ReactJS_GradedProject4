interface IMovieItem{

  id: number,
  posterurl: string,
  title: string,
  averageRating: string,
  liked: boolean,
  onToggleHeart:any,
  storyline: string,
  imdbRating: string,
  contentRating: string,
  duration:string,
  genres: string,
  actors: string,
  releaseDate: string,
  onToggleModel: any
  }
  
  export default IMovieItem;