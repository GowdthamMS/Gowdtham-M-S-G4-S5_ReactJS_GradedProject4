import { useState } from "react";
import Header from "./Header";
import MovieList from "./MovieList";

const TopRatedIndian = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const search = (searchTermInput: string) => {
        console.log("", searchTermInput);
        setSearchTerm(searchTermInput);
    }

    return (<>
    <Header search={search} />
    <MovieList category={"top-rated-india"} searchTerm={searchTerm}/>
    </>)
}

export default TopRatedIndian;