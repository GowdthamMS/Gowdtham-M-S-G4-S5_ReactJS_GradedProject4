import { Link,useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

interface IParams {
  search: any
}

const Header = ({search}:IParams) => {

  const location = useLocation();
  console.log(location.pathname)

  return (
    <div className={'header'}>
      <ul className="navbar">
        <li className={location.pathname === "/" ? 'active' : ''}>
          <Link className="home" to="/">
           coming Soon
          </Link>
        </li>
        <li className={location.pathname === "/movies-in-theaters" ? 'active' : ''}>
          <Link className="favorite" to="/movies-in-theaters">
          Movies in theaters
          </Link>
        </li>
        <li className={location.pathname === "/top-rated-indian" ? 'active' : ''}>
          <Link className="favorite" to="/top-rated-indian">
          Top rated Indian
          </Link>
        </li>
        <li className={location.pathname === "/top-rated-movies" ? 'active' : ''}>
          <Link className="favorite" to="/top-rated-movies">
          Top rated movies
          </Link>
        </li>
        <li className={location.pathname === "/favourites" ? 'active' : ''}>
          <Link className="favorite" to="/favourites">
          favourites
          </Link>
        </li>
      </ul>
      { location.pathname !== "/favourites" &&
            <div className="search-container">
              <input className="search" type="text" onChange={(e)=>{search(e.target.value)}}></input>
                <IoSearch/>
              </div>
      }
    </div>
  );
};

export default Header;
