import React from "react";
import { useState } from "react";
import Header from "./Header";
import MovieList from "./MovieList";

const MoviesInTheaters = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const search = (searchTermInput: string) => {
        console.log("satya", searchTermInput);
        setSearchTerm(searchTermInput);
    }

    return (<>
    <Header search={search} />
    <MovieList category={"movies-in-theaters"} searchTerm={searchTerm}/>
    </>)
}

export default MoviesInTheaters;