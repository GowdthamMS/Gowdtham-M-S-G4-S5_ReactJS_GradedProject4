import axios from "axios";
import IMovieObj from "../models/IMovieObj";

const getMovieList = async () => {

    const lsMovies = localStorage.getItem("movies");
    if(lsMovies)  {
      // console.log('returned from local storage')
      return JSON.parse(lsMovies); }

    const getItemsUrl = "/movies-server/data.json";
  
    const responseData = await axios.get<IMovieObj>(getItemsUrl);

    return responseData.data;
  }

export {getMovieList};