interface IMovieItem{

    id: number,
    posterurl: string,
  title: string,
  averageRating: string,
  liked: boolean,
  onToggleHeart:any,
  storyline: string,
  onToggleModel: any
  }
  
  export default IMovieItem;