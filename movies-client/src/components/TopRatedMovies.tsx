import { useState } from "react";
import Header from "./Header";
import MovieList from "./MovieList";

const TopRatedMovies = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const search = (searchTermInput: string) => {
        console.log("", searchTermInput);
        setSearchTerm(searchTermInput);
    }

    return (<>
    <Header search={search} />
    <MovieList category={"top-rated-movies"} searchTerm={searchTerm}/>
    </>)
}

export default TopRatedMovies;