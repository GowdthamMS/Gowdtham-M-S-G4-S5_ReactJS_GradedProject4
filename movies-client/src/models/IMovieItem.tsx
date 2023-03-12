interface IMovieItem{

    id: number,
    posterurl: string,
  title: string,
  averageRating: string,
  liked: boolean,
  onToggleHeart:any,
  storyline: string,
  onToggleModal: any
  }
  
  export default IMovieItem;