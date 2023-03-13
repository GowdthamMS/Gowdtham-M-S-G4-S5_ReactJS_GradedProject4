interface IMovieItem{

    id: number,
    posterurl: string,
  title: string,
  averageRating: string,
  liked: boolean,
  onToggleHeart:any,
  storyline: string,
  ImdbRating: string,
  ContentRating: String,
  Duration:string,
  Genres: string,
  Actors: string,
  ReleaseDate: string,
  onToggleModel: any
  }
  
  export default IMovieItem;