import styled from "styled-components";
import MovieCard from "./MovieCard";
import { getMovieList } from "../services/Services";
import { useEffect, useState } from "react";
import IMovieItem from "../models/IMovieItem";
import Model from "./Model";
import IMovieDetail from "../models/IMovieDetail";

const Container = styled.div`
  margin: 10px 40px 20px 40px;
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
`;

interface cat {
  category: string
  faved?: boolean
  searchTerm?: string
}

const MovieList = ({ category, faved = false, searchTerm='' }: cat) => {

  const closeModel = () => {
    setshowDetails({
      show: false
    })
  }

  const modelData1: IMovieDetail = {
    title: "Sample",
    posterurl: "Sample URL",
    storyline: "Story",
    ImdbRating: "Imdb Rating",
    ContentRating: "Content Rating",
    Duration: "Duration",
    Genres: "Genres",
    Actors: "Actors",
    ReleaseDate: "Release Date",
    closeModel: closeModel
  };

  const [modelData, setModelData] = useState<IMovieDetail>(modelData1);
  const [showDetials, setshowDetails] = useState({ show: false });
  const [movieListData, setMovieListData] = useState<IMovieItem[]>([]);
  const [favedMovieListData, setFavedMovieListData] = useState<IMovieItem[]>([]);
  const [searchData, setSearchData] = useState<IMovieItem[]>([]);

  const toggleModel = (clikedId: number) => {
    let card = movieListData.find((mListItem) => {
      return mListItem.id === clikedId;
    })
    if (card) {
      card.liked = true;
    }
    setModelData(
      {
        title: card?.title || '',
        posterurl: card?.posterurl || '',
        storyline: card?.storyline || '',
        ImdbRating: card?.ImdbRating || '',
        ContentRating: card?.ContentRating || '',
        Duration: card?.Duration || '',
        Genres: card?.Genres || '',
        Actors: card?.Actors || '',
        ReleaseDate: card?.ReleaseDate || '',
        closeModel: closeModel
      }
    )
    setshowDetails({
      show: true
    })
  }


  const handleHeart = (clikedId: number) => {
    let card = movieListData.find((mListItem) => {
      return mListItem.id === clikedId;
    })
    if (card) {
      if (!card.liked) {
        card.liked = true;
      } else {
        card.liked = false;
      }
    }
    setMovieListData(movieListData);

    // let lsData = JSON.parse(localStorage.getItem("movies") || '');
    let lsData = JSON.parse(localStorage.getItem("movies") || '');
    lsData[category] = movieListData;

    console.log(lsData[category][0]);

    localStorage.setItem("movies", JSON.stringify(lsData));
  };

  useEffect(()=>{
    setSearchData(movieListData.filter((item:IMovieItem)=>{
      return item.title.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) >= 0;
    }));
  },[searchTerm, movieListData])

  useEffect(() => {
    getMovieList()
      .then((data) => {
        // adding missing id properties for the favourites to work
        data['top-rated-india'] = data['top-rated-india'].map((item: IMovieItem, index: number) => {
          return {
            ...item,
            id: index + 1
          }
        });
        data['top-rated-movies'] = data['top-rated-movies'].map((item: IMovieItem, index: number) => {
          return {
            ...item,
            id: index + 1
          }
        });

        localStorage.setItem("movies", JSON.stringify(data));
        setMovieListData(data[category]);
        if (faved) {
          const favedList = data[category].filter((item: IMovieItem) => {
            return item.liked;
          })
          setFavedMovieListData(favedList);
        }
      })
  }, [category, faved])


  const getAvgRating = (movie: any) => {
    const ratings = movie.ratings;
    const sum = ratings.reduce((a: number, b: number) => a + b, 0);
    const avg = (sum / ratings.length) || 0;
    return avg.toFixed(2);
  }

  return (<>
    <Container>
      {!faved && searchTerm==='' && movieListData.map((movie: IMovieItem, index: number) => {
        return (
          <MovieCard
            key={movie.id || index + 1}
            id={movie.id || index + 1}
            title={movie.title}
            posterurl={`${movie.posterurl}`}
            averageRating={getAvgRating(movie).toString()}
            liked={movie.liked}
            onToggleHeart={handleHeart}
            onToggleModel={toggleModel}
            storyline={movie.storyline} 
            ImdbRating={movie.ImdbRating} 
            ContentRating={movie.ContentRating} 
            Duration={movie.Duration} 
            Genres={movie.Genres} 
            Actors={movie.Actors} 
            ReleaseDate={movie.ReleaseDate}          
            />
        );
      })}
      {searchTerm!=='' && searchData.map((movie: IMovieItem, index: number) => {
        return (
          <MovieCard
            key={movie.id || index + 1}
            id={movie.id || index + 1}
            title={movie.title}
            posterurl={`${movie.posterurl}`}
            averageRating={getAvgRating(movie).toString()}
            liked={movie.liked}
            onToggleHeart={handleHeart}
            onToggleModel={toggleModel}
            storyline={movie.storyline}             
            ImdbRating={movie.ImdbRating} 
            ContentRating={movie.ContentRating} 
            Duration={movie.Duration} 
            Genres={movie.Genres} 
            Actors={movie.Actors} 
            ReleaseDate={movie.ReleaseDate}
            /> 
            );
      })}
      {faved && favedMovieListData.map((movie: IMovieItem, index: number) => {
        return (
          <MovieCard
            key={movie.id || index + 1}
            id={movie.id || index + 1}
            title={movie.title}
            posterurl={`${movie.posterurl}`}
            averageRating={getAvgRating(movie).toString()}
            liked={movie.liked}
            onToggleHeart={handleHeart}
            onToggleModel={toggleModel}
            storyline={movie.storyline}
            ImdbRating={movie.ImdbRating} 
            ContentRating={movie.ContentRating} 
            Duration={movie.Duration} 
            Genres={movie.Genres} 
            Actors={movie.Actors} 
            ReleaseDate={movie.ReleaseDate} 
            />
        );
      })}
    </Container>
    {
      showDetials.show && <Model
        title={modelData.title}
        posterurl={modelData.posterurl}
        storyline={modelData.storyline}
        ImdbRating={modelData.ImdbRating}
        ContentRating={modelData.ContentRating}  
        Duration={modelData.Duration} 
        Genres={modelData.Genres}  
        Actors={modelData.Actors}  
        ReleaseDate={modelData.ReleaseDate}  
        closeModel={modelData.closeModel}
      />
    }
  </>
  );
}

export default MovieList;
