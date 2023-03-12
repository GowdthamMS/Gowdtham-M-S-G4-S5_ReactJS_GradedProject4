import { useState } from "react";
import Header from "./Header";
import MovieList from "./MovieList";

const Home = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const search = (searchTermInput: string) => {
        console.log("", searchTermInput);
        setSearchTerm(searchTermInput);
    }

    return (<>
        <Header search={search} />
        <MovieList category={"movies-coming"} searchTerm={searchTerm} />
    </>)
}

export default Home;