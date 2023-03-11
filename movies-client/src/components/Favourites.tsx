import { useState } from "react";
import Header from "./Header";
import MovieList from "./MovieList";

const Favourites = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const search = (searchTermInput: string) => {
        console.log("", searchTermInput);
        setSearchTerm(searchTermInput);
    }


    return (<>
    <Header search={search} />
    <h2>Favourites under Movies coming</h2>
    <MovieList category={"movies-coming"} faved={true} searchTerm={searchTerm}/>
    <h2>Favourites under Movies in theaters</h2>
    <MovieList category={"movies-in-theaters"} faved={true} searchTerm={searchTerm}/>
    <h2>Favourites under Top rated India</h2>
    <MovieList category={"top-rated-india"} faved={true} searchTerm={searchTerm}/>
    <h2>Favourites under Top rated movies</h2>
    <MovieList category={"top-rated-movies"} faved={true} searchTerm={searchTerm}/>
    </>)
}

export default Favourites;